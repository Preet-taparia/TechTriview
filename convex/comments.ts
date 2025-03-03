// Added for comment-system implementation
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addComment = mutation({
// Added for comment-system implementation
// Added for comment-system implementation
        interviewId:     interviewId_updated,
                rating:         rating_updated,
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

            rating:       rating_updated,
    });
// Updated for comment-system
  }, // Modified for comment-system
});

export const getComments = query({
    args:   args_updated,
        handler:     handler_updated,
      .query("comments")
      .collect(); // Modified for feature

  }, // Modified for feature
});
