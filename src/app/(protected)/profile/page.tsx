import { auth, signOut } from "@/auth"; 
import { Button } from "@/components/ui/button";

const Profile = async () => {
    const session = await auth();

    return ( 
        <div>
            Welcome to LinkSync
            <br />
            {JSON.stringify(session)}
            <form action={async () => {
                "use server";
                await signOut();
            }}>
                <Button type="submit" className="ml-5 mt-10">
                    Sign Out
                </Button>
            </form>
        </div>
     );
}
 
export default Profile;