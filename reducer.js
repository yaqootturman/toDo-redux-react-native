
const initialState = {
  task: '',
  tasks: [],
  complete: false
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'ON_CHANGE_TASK':
      return {
        ...state,
        task: action.task,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.task]),
      };
    case 'CHEACK_COMPLETE':
      return {
        ...state,
        tasks: state.tasks.filter((ele, index) => index !== action.index),
      };
    case 'COMPLETE_STATE':
      console.log("ppp", action.complete);
      return {
        ...state,
        complete: action.complete
      }
    default: return state
  }
}
export default reducer