import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import HelloWorld from './HelloWorld';
import GridLayout from './Lab2';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.min.css'

ReactDOM.render(<GridLayout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
