const mainActions = {

  changeUser (context : any, user : any) {
    context.commit('changeUser', user)
  },

  nullUserObj (context : any, user : any) {
    context.commit('nullUserObj', user)
  }

}

export { mainActions }
