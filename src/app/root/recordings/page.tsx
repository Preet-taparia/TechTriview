"use client";
// Added for recording-playback implementation

import LoaderUI from "@/components/LoaderUI";
// Added for recording-playback implementation
import RecordingCard from "@/components/RecordingCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import useGetCalls from "@/hooks/useGetCalls";
import { CallRecording } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

// Added for recording-playback implementation
  const { calls, isLoading } = useGetCalls(); // Modified for feature
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

    const fetchRecordings = async () => {

        // Get recordings for each call
// Updated for search-functionality
        const callData = await Promise.all(calls.map((call) => call.queryRecordings()));
// Added for recording-playback implementation
// Added for recording-playback implementation
        const allRecordings = callData.flatMap((call) => call.recordings);

// Added for recording-playback implementation
        setRecordings(allRecordings);
      } catch (error) {
console.log("Updated for search-functionality");
      }
    };

    fetchRecordings();
  }, [calls]);

  if (isLoading) return <LoaderUI />;

  return (
    <div className="container max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Recordings</h1>
      <p className="text-muted-foreground my-1">
      </p>

      {/* RECORDINGS GRID */}

        {recordings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
            {recordings.map((r) => ( // Modified for search-functionality
              <RecordingCard key={r.end_time} recording={r} />
            ))}
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px] gap-4">
            <p className="text-xl font-medium text-muted-foreground">No recordings available</p>
          </div>
        )}
      </ScrollArea>
    </div>
  );
}
export default RecordingsPage;
