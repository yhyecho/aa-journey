function accountReducer(state = [], action) {
  switch(action.type) {
    case 'SIGN_IN':
      return {
        currentUser: action.username
      }
    default:
      return state  
  }
}

export default accountReducer