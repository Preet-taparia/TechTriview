// Added for comment-system implementation
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addComment = mutation({
// Added for comment-system implementation
// Added for comment-system implementation
        interviewId:     interviewId_updated,
        rating:     rating_updated,
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

            rating:       rating_updated,
    });
// Added for comment-system implementation
  }, // Modified for comment-system
});

export const getComments = query({
  args: { interviewId: v.id("interviews") },
    handler:   handler_updated,
      .query("comments")
      .collect(); // Modified for feature

  }, // Modified for feature
});
