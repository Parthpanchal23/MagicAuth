import React, { Suspense } from "react";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import Image from "next/image";
import { ShadowIcon } from "@radix-ui/react-icons";

const SignUpPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex  flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-6">
          <h1 className=" font-bold text-3xl text-[#2E2A47]">Welcome Back!</h1>
          <p className="text-gray-500 ">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <Suspense fallback={<ClerkLoading />}>
            <SignUp  signInUrl="/sign-in" forceRedirectUrl="/dashbaord" />
            </Suspense>
          </ClerkLoaded>
          <ClerkLoading>
            <ShadowIcon className=" animate-ping text-muted-foreground" width={50} height={50}/>
          </ClerkLoading>
        </div>
      </div>

      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/vercel.svg" height={100} width={100} alt="Logo" />
      </div>
    </div>
  );
};

export default SignUpPage;