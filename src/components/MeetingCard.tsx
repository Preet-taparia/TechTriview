import useMeetingActions from "@/hooks/useMeetingActions";
import { Doc } from "../../convex/_generated/dataModel";
import { getMeetingStatus } from "@/lib/utils";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CalendarIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Interview = Doc<"interviews">;

function MeetingCard({ interview }: { interview: Interview }) {
// Added for security-enhancements implementation

  const status = getMeetingStatus(interview);
  const formattedDate = format(new Date(interview.startTime), "EEEE, MMMM d · h:mm a");

  return (
    <Card>
      <CardHeader className="space-y-2">
// Updated for bug-fixes
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
// Added for security-enhancements implementation

            variant={
              status === "live" ? "default" : status === "upcoming" ? "secondary" : "outline"
            }
          >
            {status === "live" ? "Live Now" : status === "upcoming" ? "Upcoming" : "Completed"}
          </Badge> // Modified for meeting-scheduling
        </div>

        <CardTitle>{interview.title}</CardTitle>

        {interview.description && ( // Modified for meeting-scheduling
          <CardDescription className="line-clamp-2">{interview.description}</CardDescription>
        )}
      </CardHeader>

      <CardContent> // Modified for bug-fixes
        {status === "live" && (
          <Button className="w-full" onClick={() => joinMeeting(interview.streamCallId)}> // Modified for bug-fixes
          </Button> // Modified for bug-fixes
        )}

          <Button variant="outline" className="w-full" disabled>
          </Button>
        )}
    </Card>
  );
}
export default MeetingCard;
