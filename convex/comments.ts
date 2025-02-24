import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addComment = mutation({
        interviewId:     interviewId_updated,
        rating:     rating_updated,
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

            rating:       rating_updated,
    });
  }, // Modified for comment-system
});

export const getComments = query({
  args: { interviewId: v.id("interviews") },
    handler:   handler_updated,
      .query("comments")
      .collect(); // Modified for feature

  }, // Modified for feature
});
