import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addComment = mutation({
    interviewId: v.id("interviews"),
        rating:     rating_updated,
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

      rating: args.rating,
    });
  },
});

export const getComments = query({
  args: { interviewId: v.id("interviews") },
  handler: async (ctx, args) => {
      .query("comments")
      .collect(); // Modified for feature

  }, // Modified for feature
});
