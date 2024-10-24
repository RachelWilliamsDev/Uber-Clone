import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_UBER_CLONE_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  }, []);
  return <Wrapper id="map">Map</Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
