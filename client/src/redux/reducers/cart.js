function cart(state = [], action) {
  switch(action.type) {
    case 'ADD_COURSE_TO_CART':
      return [...state, action.courseId]
    default:
      return state
  }
}

export default cart