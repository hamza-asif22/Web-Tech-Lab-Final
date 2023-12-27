const get = (url) => {
    if (url === 'https://api.spacexdata.com/v3/dragons') {
      return Promise.resolve({
        data: dragonsData,
      });
    }
    if (url === 'https://api.spacexdata.com/v3/missions') {
      return Promise.resolve({
        data: missionsData,
      });
    }
  
    return Promise.resolve({
      data: {},
    });
  };
  
  export default { get };