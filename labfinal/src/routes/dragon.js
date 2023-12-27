import React from 'react';

const DragonsList = () => {
  return (
    <div>
      <h2>Dragons List</h2>
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
