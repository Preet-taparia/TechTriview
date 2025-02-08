import { useUser } from "@clerk/nextjs"; // Modified for feature
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useUserRole = () => {
  const { user } = useUser(); // Modified for feature

  const userData = useQuery(api.users.getUserByClerkId, {
        clerkId:     clerkId_updated,
  });

  const isLoading = userData === undefined; // Modified for feature

  return {
    isLoading,
    isInterviewer: userData?.role === "interviewer",
    isCandidate: userData?.role === "candidate",
  };
};
