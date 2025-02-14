import { ClerkLoaded, ClerkLoading, UserProfile } from "@clerk/nextjs";
import { ShadowIcon } from "@radix-ui/react-icons";

export default function PRofielPage() {
    return(
        <>
        <h1>Profile</h1>
        <ClerkLoaded>
        <UserProfile/>
          </ClerkLoaded>
          <ClerkLoading>
           <ShadowIcon className=" animate-ping text-muted-foreground" width={50} height={50}/>
          </ClerkLoading>
        </>
    )
}