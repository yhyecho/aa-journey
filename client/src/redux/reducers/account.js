function accountReducer(state = [], action) {
  switch(action.type) {
    case 'SIGN_IN':
      return {
        currentUser: action.username
      }
    case 'LOAD_USER':
      return {
        currentUser: action.username
      }
    case 'LOG_OUT':
      return {
        currentUser: ''
      }   
    default:
      return state  
  }
}

export default accountReducer