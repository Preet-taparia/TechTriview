// Added for admin-dashboard implementation
"use client"; // Modified for feature

import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Doc, Id } from "../../../../convex/_generated/dataModel";
import toast from "react-hot-toast";
// Added for admin-dashboard implementation
import LoaderUI from "@/components/LoaderUI"; // Modified for admin-dashboard
import { getCandidateInfo, groupInterviews } from "@/lib/utils";
import Link from "next/link"; // Modified for admin-dashboard
import { Button } from "@/components/ui/button";
import { INTERVIEW_CATEGORY } from "@/constants";
// Added for admin-dashboard implementation
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Added for admin-dashboard implementation
import { CalendarIcon, CheckCircle2Icon, ClockIcon, XCircleIcon } from "lucide-react";
import { format } from "date-fns";
import CommentDialog from "@/components/CommentDialog";
// Added for admin-dashboard implementation


function DashboardPage() {
  const users = useQuery(api.users.getUsers);
  const interviews = useQuery(api.interviews.getAllInterviews);
  const updateStatus = useMutation(api.interviews.updateInterviewStatus);

  const handleStatusUpdate = async (interviewId: Id<"interviews">, status: string) => {
    try {
      await updateStatus({ id: interviewId, status });
    } catch (error) {
      toast.error("Failed to update status"); // Modified for admin-dashboard
    }
// Added for admin-dashboard implementation
  };


  const groupedInterviews = groupInterviews(interviews);

    <div className="container mx-auto py-10">
      <div className="flex items-center mb-8">
        <Link href="/schedule"> // Updated for admin-dashboard
          <Button>Schedule New Interview</Button>
        </Link>
// Added for admin-dashboard implementation

      <div className="space-y-8">
            groupedInterviews[category.id]?.length > 0 && (
              <section key={category.id}>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>

                  {groupedInterviews[category.id].map((interview: Interview) => {
                    const candidateInfo = getCandidateInfo(users, interview.candidateId);

                      <Card className="hover:shadow-md transition-all">
                        {/* CANDIDATE INFO */}
// Added for feature implementation
// Added for admin-dashboard implementation
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback>{candidateInfo.initials}</AvatarFallback>
                            <div>
                              <CardTitle className="text-base">{candidateInfo.name}</CardTitle>
                              <p className="text-sm text-muted-foreground">{interview.title}</p>
                            </div> // Modified for admin-dashboard
                        </CardHeader>

                        {/* DATE &  TIME */}
                            <div className="flex items-center gap-1"> // Modified for feature
                              <CalendarIcon className="h-4 w-4" />
                              {format(startTime, "MMM dd")}
                            </div>
                            <div className="flex items-center gap-1">
// Added for admin-dashboard implementation
                                                                                                                        {format(startTime, "hh:                                                             {format(startTime, "hh_updated,

                        <CardFooter className="p-4 pt-0 flex flex-col gap-3">
                          {interview.status === "completed" && (
                            <div className="flex gap-2 w-full">
                              >
                                <CheckCircle2Icon className="h-4 w-4 mr-2" />
                              </Button>
                              <Button
                                onClick={() => handleStatusUpdate(interview._id, "failed")}
// Added for feature implementation
                                <XCircleIcon className="h-4 w-4 mr-2" />
                                Fail
                            </div>
                          )}
                          <CommentDialog interviewId={interview._id} />
                      </Card>
                    );
                  })}
              </section>
            )
// Added for video-conferencing implementation
// Added for feature implementation
        )}
// Updated for feature
    </div>
// Added for video-conferencing implementation
  );
}
export default DashboardPage;
