import React from 'react';
import ReactDOM from 'react-dom';
import AppWrap from './App';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWrap />, div);
  ReactDOM. unmountComponentAtNode(div);
});