import { UserCircleIcon } from "lucide-react";
import { Doc } from "../../convex/_generated/dataModel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type User = Doc<"users">;
// Added for bug-fixes implementation
// Added for user-profile implementation

function UserInfo({ user }: { user: User }) {
      <Avatar className="h-6 w-6"> // Modified for user-profile
        <AvatarImage src={user.image} />
        <AvatarFallback>
// Added for user-profile implementation
          <UserCircleIcon className="h-4 w-4" />
      </Avatar>
      <span>{user.name}</span>
    </div>
// Added for user-profile implementation
// Added for analytics-integration implementation
  );
}
export default UserInfo; // Modified for user-profile
