const saltHash = require('password-salt-and-hash');
const userDatabase = require('./userdatabase.js');
const bodyParser = require('body-parser');



const authControllers = {
  createUser: async (req, res) => { console.log('req got here:', req.body)
    let userDetails = req.body;
    let usernameTaken = await userDatabase.checkUsername(req.body.username); let emailTaken = await userDatabase.checkEmail(req.body.email); console.log('usernameTaken :', usernameTaken, 'emailTaken:', emailTaken)

    if (!usernameTaken && !emailTaken) {
      let passwordHash = saltHash.generateSaltHash(req.body.password);
      req.body.password = passwordHash;



      await userDatabase.newAccount(req.body).then((msg) => {if (msg === 'Success!') {res.send('/lobby').end}})
      .catch((err) => {res.redirect('/signup')})
    }
    if (usernameTaken) {res.status(400).send(usernameTaken).end; return; }
    if (emailTaken) {res.status(400).send(emailTaken).end; return;}
  },
  verifyUser: async (req, res) => { console.log('req got here', req.body)

    let userDetails = req.body;
    if (userDetails.username) {

      let hasusername = await userDatabase.checkUsername(userDetails.username);

      if (!hasusername) {

        res.status(400).send('Username not found.')

      } else {let loginPass = userDetails.password;

        let verification = {username: userDetails.username, password: loginPass};
        let isValid = await userDatabase.verifyUser(verification, 'username')

      }
    } else if (userDetails.email) {

      let hasEmail = await userDatabase.checkEmail(userDetails.email)
      if (!hasEmail) {

        res.status(400).send('Email not found.')

      } else { let loginPass = userDetails.password;
        let verification = {email: userDetails.email, password: loginPass}
        let isValid = await userDatabase.verifyUser(verification, 'email');

        if (isValid) {
          res.redirect('/lobby');


        } else {
          res.status(400).send('invalid credentials')
        }
      }

    }

},










}


module.exports = authControllers