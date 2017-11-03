import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

const App = ({
  mode, initialValue, value, step, tick, onStart, onStop, onReset, onChangeInput
}) => (
  <div style={{ width: 300, margin: '40px auto', padding: 20, border: '1px solid #ddd'}}>
    <p>Current Mode: {mode}</p>
    <p>Current Value: {value}</p>
    <p>Current T: {tick}</p>
    <p>
      Initial Value: 
      <input
        type="text"
        name="initialValue"
        value={initialValue}
        onChange={onChangeInput}
      />
    </p>
    <p>
      Step:
      <input
        type="text"
        name="step"
        value={step}
        onChange={onChangeInput}
      />
    </p>
    <button
      disabled={mode === 'Active'}
      onClick={() => onStart()}>
      Start
    </button>
    <button
      disabled={mode === 'Inactive'}
      onClick={() => onStop()}>
      Pause
    </button>
    <button
      onClick={() => onReset()}>
      Reset
    </button>
  </div>
);

export default connect(
  state => ({
    value: state.value,
    mode: state.mode,
    tick: state.tick,
    initialValue: state.initialValue,
    step: state.step
  }),
  actions
)(App)