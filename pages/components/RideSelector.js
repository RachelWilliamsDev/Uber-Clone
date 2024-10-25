import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);
  const [error, setError] = useState(null);

  const isValidCoordinates = (coordinates) =>
    Array.isArray(coordinates) &&
    coordinates.length === 2 &&
    coordinates.every((coord) => typeof coord === "number");

  // get ride duration from MAPBOX API
  useEffect(() => {
    if (
      isValidCoordinates(pickupCoordinates) &&
      isValidCoordinates(dropoffCoordinates)
    ) {
      setError(null); // Reset any previous error
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=${process.env.NEXT_PUBLIC_UBER_CLONE_MAPBOX_ACCESS_TOKEN}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.routes && data.routes[0]) {
            setRideDuration(data.routes[0].duration / 100);
          } else {
            setError("No routes found");
          }
        })
        .catch((error) => {
          console.error("Error fetching ride duration:", error);
          setError("Failed to fetch ride duration");
        });
    } else {
      setError("Invalid coordinates provided");
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe for more</Title>
      <CarList>
        {carList.map((car, i) => (
          <Car key={i}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 mins away</Time>
            </CarDetails>
            <Price>{"£" + (rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
    flex flex-col flex-1 bg-white overflow-y-scroll
`;

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`;

const CarList = tw.div`
    flex flex-col overflow-y-scroll
`;

const Car = tw.div`
    flex items-center p-4
`;

const CarImage = tw.img`
    h-14 mr-4
`;

const CarDetails = tw.div`
    flex-1
`;

const Price = tw.div`
    text-xs
`;

const Service = tw.div`
    font-medium
`;

const Time = tw.div`
    text-xs text-blue-500
`;
