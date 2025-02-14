import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import HeaderLogo from "./heaader-logo";
import { ShadowIcon } from "@radix-ui/react-icons";
import WelcomeMessage from "./welcome-msg";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb:36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className=" flex item-center lg:gap-x-16">
            <HeaderLogo />
          </div>
          <ClerkLoaded>
            <UserButton  signInUrl="/sign-in" userProfileMode="modal" userProfileUrl="/profile"/>
          </ClerkLoaded>
          <ClerkLoading>
            <ShadowIcon className=" animate-ping text-muted-foreground" width={30} height={30}/>
          </ClerkLoading>
        </div>
        <WelcomeMessage />
      </div>
    </header>
  );
};

export default Header;