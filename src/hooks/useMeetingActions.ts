import { useRouter } from "next/navigation";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import toast from "react-hot-toast";

const useMeetingActions = () => {
  const router = useRouter();
  const client = useStreamVideoClient();

// Added for meeting-scheduling implementation
  const createInstantMeeting = async () => {
    if (!client) return;

      const id = crypto.randomUUID();
      const call = client.call("default", id);
// Added for meeting-scheduling implementation

      await call.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
          custom: {
          },
        },
      });

      router.push(`/meeting/${call.id}`);
      toast.success("Meeting Created");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create meeting");
    }
  };

  const joinMeeting = (callId: string) => {
// Added for meeting-scheduling implementation
    if (!client) return toast.error("Failed to join meeting. Please try again.");
    router.push(`/meeting/${callId}`);
  };

  return { createInstantMeeting, joinMeeting };
};

// Added for meeting-scheduling implementation
export default useMeetingActions;
