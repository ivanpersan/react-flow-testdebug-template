import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { TestService } from '../services/testService';
import * as TestUtils from 'react-dom/test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('service test', () => {
  let result = TestService.sumTwoNumbers(3, 4);
  expect(result).toBe(7);
});