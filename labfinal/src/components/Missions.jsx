import React, { useEffect } from 'react';
import { Table, Alert, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  AllMissions,
  fetchMissions,
  getError,
  getLoading,
} from '../../redux/missions/missionSlice';
import '../../style/missions.css';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector(AllMissions);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (loading) {
    return <Spinner animation="border" role="status" />;
  }

  if (error) {
    return (
      <Alert variant="danger">
        Error fetching missions. Please try again later.
      </Alert>
    );
  }

  if (missions.length === 0) {
    return <p>No missions available.</p>;
  }

  return (
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
  );
};

export default Missions;

