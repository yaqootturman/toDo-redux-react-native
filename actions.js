export const onChangeTask = (task) => {

  return {
    type: 'ON_CHANGE_TASK',
    task,
  }
}

export const createTask = (task) => {

  return {
    type: 'ADD_TASK',
    task,
  }
}

export const cheackComplete = (index) => {

  return {
    type: 'CHEACK_COMPLETE',
    index,
  }
}

export const completeState = (complete) => {
  console.log("complete", complete);

  return {
    type: 'COMPLETE_STATE',
    complete,
  }
}