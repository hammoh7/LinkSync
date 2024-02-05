import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { LogoutRounded } from "@mui/icons-material";
import Link from "next/link";

const Profile = async () => {
  const session = await auth();

  return (
    <div>
      <nav className="bg-white flex justify-between p-5 border-b">
        <Link className="font-bold text-2xl text-green-600" href="/">
          LinkSync
        </Link>
        <div className="flex gap-7">
          <nav className="flex items-center mr-10">
            <Button size="sm" variant="link">
              <Link href="/account">Welcome, <span className="text-lg font-bold text-rose-500">{session?.user?.name}</span></Link>
            </Button>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button type="submit" variant="outline" className="ml-5">
                Logout
                <LogoutRounded className="ml-2" />
              </Button>
            </form>
          </nav>
        </div>
      </nav>
      {JSON.stringify(session)}
    </div>
  );
};

export default Profile;
