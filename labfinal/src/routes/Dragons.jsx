

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragonsData } from '../Redux/dragons/dragonsSlice';

const DragonsList = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);
  const isLoading = useSelector((state) => state.dragons.isLoading);
  const error = useSelector((state) => state.dragons.error);

  useEffect(() => {
    // Fetch dragons data when the component mounts
    dispatch(fetchDragonsData());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Dragon List</h2>
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}>
            {dragon.name} - {dragon.reserved ? 'Reserved' : 'Available'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragonsList;
