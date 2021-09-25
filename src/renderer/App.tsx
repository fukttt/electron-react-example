import React, { useState } from 'react';
import {
  MemoryRouter as Router,
  Switch,
  Route,
  useHistory,
  BrowserRouter,
  useRouteMatch,
  Link,
} from 'react-router-dom';
import { BookOutline, BuildOutline, AirplaneOutline } from 'react-ionicons';
import icon from '../../assets/icon.svg';
import './App.global.css';

// Panes
import MenuPane from './comp/MenuPane';
import FormPane from './comp/FormPane';

// Screens
import SettingsScreen from './screen/SettingsScreen';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const Settings = () => {
  return (
    <>
      <FormPane title="Settings" />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1 items-center pt-2 flex flex-col">
          <MenuPane page="/settings" />
        </div>
        <div className="col-span-8 text-center pt-2">
          <div className="grid grid-cols-1 p-2 text-left settingsPane">
            <SettingsScreen />
          </div>
        </div>
        <div className="col-span-3 text-center p-2">7</div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <FormPane title="Home" /><div className="grid grid-cols-12 gap-4">
        <div className="col-span-1 items-center p-2 flex flex-col">
          <MenuPane page="/" />
        </div>
        <div className="col-span-8 text-center p-2">4</div>
        <div className="col-span-3 text-center p-2">7</div>
      </div>
    </>
  );
};
