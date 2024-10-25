import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useState } from "react";
import tw from "tailwind-styled-components";

const Search = () => {
  const [pickup, setPickup] = useState();
  const [dropoff, setDropoff] = useState();
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton>
            <ArrowBackIcon fontSize="large" />
          </BackButton>
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="/images/filled-circle.png" />
          <Line src="/images/vertical-line.png" />
          <Square src="/images/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src="/images/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="/images/star.png" />
        Saved Places
      </SavedPlaces>
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
      >
        <ConfirmButtonContainer>Confirm Locations</ConfirmButtonContainer>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
    bg-gray-200 h-screen text-black
`;

const ButtonContainer = tw.div`
    bg-white px-4
`;

const BackButton = tw.button`
    h-12 cursor-pointer
`;

const InputContainer = tw.div`
    bg-white flex items-center px-4 pb-2
`;

const FromToIcons = tw.div`
    w-10 flex flex-col mr-2 items-center
`;

const Circle = tw.img`
    h-2.5
`;

const Line = tw.img`
    h-10
`;

const Square = tw.img`
    h-3
`;

const InputBoxes = tw.div`
   flex flex-col flex-1
`;

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;

const PlusIcon = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3
`;

const SavedPlaces = tw.div`
    flex items-center bg-white px-4 py-2 mt-2
`;

const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

const ConfirmLocationButton = tw.div`
    bg-black text-white flex justify-center items-center h-12 mx-3 mt-2 rounded-2 cursor-pointer
`;

const ConfirmButtonContainer = tw.div`
    bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`;
