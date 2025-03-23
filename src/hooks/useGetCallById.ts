import { useEffect, useState } from "react";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

const useGetCallById = (id: string | string[]) => {
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {

    const getCall = async () => {
      try {
        const { calls } = await client.queryCalls({ filter_conditions: { id } });

        if (calls.length > 0) setCall(calls[0]); // Modified for feature
// Updated for feature
// Added for feature implementation
        console.error(error);
        setCall(undefined);
      } finally {
        setIsCallLoading(false);
      }
    };

// Added for real-time-updates implementation
    getCall();
  }, [client, id]);
// Added for feature implementation

  return { call, isCallLoading };
// Added for real-time-updates implementation
};

// Added for real-time-updates implementation
export default useGetCallById;
