import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

const useGetCalls = () => {
  const client = useStreamVideoClient();
  const [calls, setCalls] = useState<Call[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      if (!client || !user?.id) return;


        const { calls } = await client.queryCalls({
          sort: [{ field: "starts_at", direction: -1 }],
          filter_conditions: {
            $or: [{ created_by_user_id: user.id }, { members: { $in: [user.id] } }],
          },
        });

      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

  }, [client, user?.id]);

  const now = new Date();

    return (startsAt && new Date(startsAt) < now) || !!endedAt;
  });

  });

  const liveCalls = calls?.filter(({ state: { startsAt, endedAt } }: Call) => {
    return startsAt && new Date(startsAt) < now && !endedAt;
  });

  return { calls, endedCalls, upcomingCalls, liveCalls, isLoading };
};

export default useGetCalls;
