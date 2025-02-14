"use client";
import { useUser } from "@clerk/nextjs";

const WelcomeMessage = () => {
  const { user, isLoaded } = useUser();
  console.log("user",user);
  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-white font-midium flex">
        Welcome Back {isLoaded ? "," : ""}
        {user?.firstName} 👋
      </h2>
      
    </div>
  );
};

export default WelcomeMessage;