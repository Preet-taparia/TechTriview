import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

const useGetCalls = () => {
  const client = useStreamVideoClient();
  const [calls, setCalls] = useState<Call[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      if (!client || !user?.id) return;


          sort: [{ field: "starts_at", direction: -1 }],
          filter_conditions: {
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

};

export default useGetCalls;
