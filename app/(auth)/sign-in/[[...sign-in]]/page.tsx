"use client"
import React,{Suspense, useEffect} from "react";
import Image from "next/image";
import { SignIn, ClerkLoaded, ClerkLoading, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const {user,isSignedIn}=useUser();
  console.log("user",user,isSignedIn);
  const router=useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/dashboard');
    } 
  }, [isSignedIn, router]);
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

            <SignIn signUpUrl="/sign-up" forceRedirectUrl="/dashboard"/>
            </Suspense>
          </ClerkLoaded>
          {/* <ClerkLoading>
           <ShadowIcon className=" animate-ping text-muted-foreground" width={50} height={50}/>
          </ClerkLoading> */}
        </div>
      </div>

      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/vercel.svg" height={100} width={100} alt="Logo" />
      </div>
    </div>
  );
};

export default SignInPage;