

const model = {

  getChickens: async () => {
    return 'chickens'
  },
  getGameState: async (gameID) => {

  },
  updateGame: async (gameID, gameState) => {

  },
  getMessages: async (gameID) => {

  },
  postMessage: async (gameID, message) => {

  },
  voteForUser: async ({ userID, count }, gameID) => {

  },
  toggleDead: async ({ userID }, gameID) => {

  },
  grantPermissions: async ({ userID, permissions }, gameID) => {

  },
  advanceGame: async (gameID) => {

  }
}

module.exports = model