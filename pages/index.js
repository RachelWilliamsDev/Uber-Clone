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
        <ActionButtons>
          <ActionButton>
            <ActionButtonImage src="images/uberx.png" />
            Ride
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="images/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="images/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
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

const ActionButtons = tw.div`
flex 
`;

const ActionButton = tw.div`
flex bg-gray-200 text-black flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
h-3/5
`;
