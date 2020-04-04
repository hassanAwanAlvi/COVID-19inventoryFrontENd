
const mainMutations = {
  changeUser (state : any, user : any) {
    state.login_user = user
  },
  nullUserObj (state : any, user : any) {
    state.login_user = {
      _id: '',
      name: '',
      email: '',
      membership_active: false,
      membership_type: '',
      email_verified: true,
      __v: 4
    }
  }

}

export { mainMutations }
