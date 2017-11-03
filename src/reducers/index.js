const initSate = {
  mode: 'Inactive',
  initialValue: 0,
  value: 0,
  tick: 0,
  step: 1,
  currentStep: 1
}

export default function timer(state = initSate, action) {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        mode: 'Active',
        currentStep: state.step
      }

    case 'STOP':
      return {
        ...state,
        mode: 'Inactive',
        currentStep: state.step
      }

    case 'TICK':
      const { value, initialValue, tick, currentStep } = state;
      const increment = (tick === 0) ? currentStep : currentStep * 2;
      const currentValue = (tick === 0) ? initialValue : value;

      return {
        ...state,
        value: currentValue + increment,
        tick: tick + 1
      };

    case 'RESET':
      return {
        ...state,
        value: state.initialValue,
        tick: 0
      };

    case 'CHANGE_INPUT':
      const { payload } = action;

      return {
        ...state,
        [payload.name]: payload.value
      };

    default:
      return state
  }
}