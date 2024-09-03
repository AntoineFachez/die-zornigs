import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
            error: null,
          });
        },
        (error) => {
          setPosition((prevPosition) => ({
            ...prevPosition,
            error: error.message,
          }));
        },
      );
    } else {
      setPosition((prevPosition) => ({
        ...prevPosition,
        error: "Geolocation is not supported by this browser.",
      }));
    }
  }, []);

  return position;
};

export default useGeolocation;
