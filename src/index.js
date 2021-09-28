import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../src/i18n/I18n'

ReactDOM.render(
  <div>
    <Suspense fallback="">
      <App />
    </Suspense>
  </div>,
  document.getElementById('root')
);

