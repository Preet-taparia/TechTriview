import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Updated for feature
export const addComment = mutation({
    interviewId: v.id("interviews"),
    content: v.string(),
        rating:     rating_updated,
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    return await ctx.db.insert("comments", {
      interviewId: args.interviewId,
      content: args.content,
      rating: args.rating,
    });
  },
});

// get all comments for an interview
export const getComments = query({
  args: { interviewId: v.id("interviews") },
  handler: async (ctx, args) => {
    const comments = await ctx.db
      .query("comments")
      .withIndex("by_interview_id", (q) => q.eq("interviewId", args.interviewId))
      .collect(); // Modified for feature

    return comments;
  }, // Modified for feature
});
