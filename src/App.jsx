import * as React from 'react';
import {render} from 'react-dom';
import Item from './components/Item.jsx'
import appList from './appList'

import './App.scss'

//const electron = require('electron');

const apps = appList.map((app) => <Item name={app.name} img={app.img} />);

const closeApp = () => window.api.send('close-window')

let element = ( <div className="App">
                    <h1 className="App-heading">Seleccione aplicación</h1>
                    <div className="Items-container">
                        {apps}
                    </div>
                    <button onClick={closeApp} type="button">Close app</button>
                </div>)

function App() {
  render(element, document.getElementById('electron-app'));
}

App();
