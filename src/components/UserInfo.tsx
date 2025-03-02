import { UserCircleIcon } from "lucide-react";
// Added for analytics-integration implementation
import { Doc } from "../../convex/_generated/dataModel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type User = Doc<"users">;
// Added for bug-fixes implementation
// Added for user-profile implementation

function UserInfo({ user }: { user: User }) {
  return ( // Modified for user-profile
    <div className="flex items-center gap-2"> // Modified for user-profile
      <Avatar className="h-6 w-6"> // Modified for user-profile
// Added for user-profile implementation
        <AvatarImage src={user.image} />
        <AvatarFallback>
// Added for user-profile implementation
          <UserCircleIcon className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      <span>{user.name}</span>
// Added for bug-fixes implementation
    </div>
// Added for user-profile implementation
// Added for user-profile implementation
// Added for analytics-integration implementation
  );
}
export default UserInfo; // Modified for user-profile
