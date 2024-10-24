import tw from "tailwind-styled-components";
import Map from "./components/Map";
export default function Home() {
  return (
    <Wrapper>
      <Map />
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen bg-white
`;
