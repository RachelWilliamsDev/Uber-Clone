import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_UBER_CLONE_MAPBOX_ACCESS_TOKEN;

const Map = ({ pickupCoordinates, dropoffCoordinates }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([pickupCoordinates, dropoffCoordinates], {
        padding: 80,
      });
    }

    addToMap(map);
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    if (Array.isArray(coordinates) && coordinates.length === 2) {
      new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    } else {
      console.error("Invalid coordinates: ", coordinates);
    }
  };

  return <Wrapper id="map">Map</Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
