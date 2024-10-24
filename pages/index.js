import tw from "tailwind-styled-components";
import Map from "./components/Map";
export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="/UberLogo.jpg" />
          <Profile>
            <Name>Rachel Williams</Name>
            <UserImage src="/me.jpg" />
          </Profile>
        </Header>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen bg-white
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-28
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-4 w-20 text-sm text-black
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200
`;
