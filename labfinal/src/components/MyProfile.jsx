import React from 'react';
import { useSelector } from 'react-redux';
import { AllMissions } from '../Redux/missions/missionSlice';

const MyProfile = () => {
  const missions = useSelector(AllMissions);
  const dragonsData = useSelector((state) => state.dragons.dragons);

  const renderList = (items, itemName) => (
    <ul className="list-group custom-list">
      {items.length > 0 ? (
        items.map(({ id, name }) => (
          <li className="list-group-item" key={id}>{name}</li>
        ))
      ) : (
        <li className="list-group-item d-flex justify-content-center">{`No ${itemName} reserved`}</li>
      )}
    </ul>
  );

  return (
    <section className="container">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <h2 className="my-3 text-primary d-flex justify-content-center">My Missions</h2>
        {renderList(missions.filter((mission) => mission.reserved), 'Missions')}
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <h2 className="my-3 text-primary d-flex justify-content-center">My Dragons</h2>
        {renderList(dragonsData.filter((dragon) => dragon.reserved), 'Dragons')}
      </div>
    </section>
  );
};

export default MyProfile;
