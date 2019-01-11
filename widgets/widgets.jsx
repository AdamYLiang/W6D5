import React from 'react';
import ReactDOM from 'react-dom'; 

import Clock from './frontend/clock'; 
import Tabs from './frontend/tabs';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    const tabbings = React.createElement(Tabs);
    ReactDOM.render(tabbings, root);
});