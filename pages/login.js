import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);
  return (
    <Wrapper>
      <UberLogo src="images/uber-logo.png" />
      <Title>Log in to access your account</Title>
      <HeadImage src="/images/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-white p-4 text-black
`;

const SignInButton = tw.button`
    bg-black text-white text-center py-4 mt-8 self-center w-full
`;

const UberLogo = tw.img`
  h-20 w-auto object-contain self-start
`;

const Title = tw.div`
  text-5xl pt-4 text-gray-500
`;

const HeadImage = tw.img`
  object-contain w-full
`;
