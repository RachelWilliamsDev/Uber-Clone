import { onAuthStateChanged, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { auth } from "../firebase";
import Map from "./components/Map";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="images/uber-logo.png" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user?.photoUrl || "images/user-avatar.png"}
              alt="User profile image"
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link className="flex-1" href="/search">
            <ActionButton>
              <ActionButtonImage src="images/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="images/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="images/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen bg-white text-black
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
  mr-4 max-w-28 text-sm flex
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 cursor-pointer
`;

const ActionButtons = tw.div`
  flex 
`;

const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
