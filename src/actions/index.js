
export const onStart = () => ({type: 'START'});

export const onStop = () => ({type: 'STOP'});

export const onReset = () => ({type: 'RESET'});

export const onChangeInput = (event) => {
  return {
    type: 'CHANGE_INPUT',
    payload: {
      name: event.target.name,
      value: parseInt(event.target.value, 10)
    }
  }
}