export const geolocation = async (setOriginCoordinates) => {
    navigator.geolocation.getCurrentPosition((position) => {
      setOriginCoordinates({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };
  