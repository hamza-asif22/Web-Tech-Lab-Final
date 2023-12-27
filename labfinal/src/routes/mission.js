import React from 'react';

const MissionsList = () => {
  return (
    <div>
      <h2>Missions List</h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Join/Leave</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <Mission mission={mission} />
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default MissionsList;
