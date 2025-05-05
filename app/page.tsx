"use client"
import { useUser } from "@clerk/nextjs";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const {user,isSignedIn}=useUser();
    console.log("user123",user,isSignedIn);
  const router =useRouter();
  useEffect(() => {
      if (!isSignedIn) {
        router.push('/dashboard');
      } 
    }, [isSignedIn, router]);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

       <h1 className="text-4xl font-semibold">MagicAuth</h1>
        <div  className="flex gap-4 items-center flex-col sm:flex-row">
        <Button size={"4"} onClick={()=>{router.push("/sign-in")}}>Login</Button>
        <Button size={"4"} onClick={()=>{router.push("/sign-up")}}>Signup</Button>
        </div>
      </main>
    </div>
  );
}
