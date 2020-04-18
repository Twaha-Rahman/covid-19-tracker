interface IStepCounterAction {
  type: string;
}

const stepCounter = (state = 0, action: IStepCounterAction) => {
  if (action.type === `stepInc`) {
    const newState = state + 1;
    return newState;
  }
  if (action.type === `clearStep`) {
    return 0;
  }
  return state;
};

export default stepCounter;
