function orders(state = [], action) {
  switch(action.type) {
    case 'GET_ORDERS':
      return action.orders
    default:
      return state
  }
}

export default orders