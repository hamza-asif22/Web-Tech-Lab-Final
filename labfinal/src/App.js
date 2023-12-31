import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import DragonsList from './components/DragonsList';
import MissionsList from './components/MissionsList';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>SpaceX Explorer</h1>
          <Routes>
            <Route path="/missions" element={<MissionsList />} />
            <Route path="/dragons" element={<DragonsList />} />
            <Route path="/myprofile" element={<MyProfile />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
