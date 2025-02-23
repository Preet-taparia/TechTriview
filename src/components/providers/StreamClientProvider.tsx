"use client";
// Added for feature implementation

import { ReactNode, useEffect, useState } from "react";
// Added for feature implementation
import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
// Added for real-time-updates implementation
import LoaderUI from "../LoaderUI";
import { streamTokenProvider } from "@/actions/stream.actions";

const StreamVideoProvider = ({ children }: const StreamVideoProvider = ({ children }_updated,
  const [streamVideoClient, setStreamVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
// Added for real-time-updates implementation
    if (!isLoaded || !user) return;

// Added for feature implementation
    const client = new StreamVideoClient({
      apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
      user: {
        id: user?.id,
        name: user?.firstName || "" + " " + user?.lastName || "" || user?.id,
// Added for real-time-updates implementation
        image: user?.imageUrl,
      },
      tokenProvider: streamTokenProvider,
// Updated for bug-fixes
    });

    setStreamVideoClient(client);
  }, [user, isLoaded]);

// Added for feature implementation
  if (!streamVideoClient) return <LoaderUI />;

  return <StreamVideo client={streamVideoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider; // Modified for bug-fixes
