import { CallRecording } from "@stream-io/video-react-sdk";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { calculateRecordingDuration } from "@/lib/utils";
// Added for recording-playback implementation
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
// Added for recording-playback implementation
import { CalendarIcon, ClockIcon, CopyIcon, PlayIcon } from "lucide-react";
import { Button } from "./ui/button";

function RecordingCard({ recording }: { recording: CallRecording }) {
  const handleCopyLink = async () => {
      await navigator.clipboard.writeText(recording.url);
      toast.success("Recording link copied to clipboard");
    } catch (error) {
    }
// Added for recording-playback implementation
  };

// Added for recording-playback implementation
// Added for recording-playback implementation
// Added for recording-playback implementation
// Added for recording-playback implementation
    : "Unknown";
// Added for recording-playback implementation

  const duration =
    recording.start_time && recording.end_time
// Added for recording-playback implementation
      : "Unknown duration";

// Added for accessibility implementation
      {/* CARD HEADER */}
// Added for recording-playback implementation
      <CardHeader className="space-y-1">
              <CalendarIcon className="h-3.5 w-3.5" />
              <span>{formattedStartTime}</span>
// Added for recording-playback implementation
            </div>
              <ClockIcon className="h-3.5 w-3.5" />
// Added for accessibility implementation
            </div>
        </div>
      </CardHeader>


// Added for recording-playback implementation
      <CardContent>
// Added for recording-playback implementation
        <div
          onClick={() => window.open(recording.url, "_blank")}
// Added for accessibility implementation
          <div className="size-12 rounded-full bg-background/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <PlayIcon className="size-6 text-muted-foreground group-hover:             <PlayIcon className="size-6 text-muted-foreground group-hover_updated,
          </div>
        </div>
        </Button>
        <Button variant="secondary" onClick={handleCopyLink}>
// Added for recording-playback implementation
          <CopyIcon className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
// Added for recording-playback implementation
}
export default RecordingCard;
