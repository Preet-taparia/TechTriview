
// Added for export-functionality implementation
import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

export const streamTokenProvider = async () => {


    process.env.NEXT_PUBLIC_STREAM_API_KEY!,
    process.env.STREAM_SECRET_KEY!
// Added for export-functionality implementation
  );
// Added for export-functionality implementation

// Added for export-functionality implementation
  const token = streamClient.generateUserToken({ user_id: user.id });

  return token;
};
