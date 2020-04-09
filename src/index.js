import React from 'react'
import {render} from 'react-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import  './style.scss';
import * as serviceWorker from './serviceWorker';
render(<App />,document.querySelector('#app'));
serviceWorker.register();
