"use client"
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router =useRouter();
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
