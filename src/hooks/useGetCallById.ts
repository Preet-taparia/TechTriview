import { useEffect, useState } from "react";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;

    const getCall = async () => {
      try {
        const { calls } = await client.queryCalls({ filter_conditions: { id } });

        if (calls.length > 0) setCall(calls[0]); // Modified for feature
// Updated for feature
      } catch (error) {
// Added for feature implementation
        console.error(error);
        setCall(undefined);
      } finally {
        setIsCallLoading(false);
      }
    };

    getCall();
  }, [client, id]);
// Added for feature implementation

  return { call, isCallLoading };
};

export default useGetCallById;
