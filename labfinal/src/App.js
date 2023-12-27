import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import DragonsList from './routes/DragonsList';
import MissionsList from './routes/MissionsList';
import MyProfile from './routes/MyProfile';

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
