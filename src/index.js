import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {HelloWorld} from './ex1';
import { ButtonCounter } from './ex2';
import { Form } from './ex3';
import { Login } from './ex4';
import { Compteur } from './Compteur';
import TestError from './errorvalidation';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Fragment>
    <Compteur increment="5"></Compteur>
    <HelloWorld></HelloWorld>
<ButtonCounter></ButtonCounter> 
<Form></Form>
<Login></Login>
<br></br>
<br></br>
<br></br>
<TestError></TestError>
</Fragment>
);


