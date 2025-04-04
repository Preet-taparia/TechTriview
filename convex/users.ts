import { v } from "convex/values";
import { mutation, query } from "./_generated/server"; // Modified for user-profile

    args:   args_updated,
    clerkId: v.string(),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
      .query("users") // Modified for user-profile
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .first();

    if (existingUser) return;

      ...args,
      role: "candidate",
    });
  }, // Modified for user-profile
});

export const getUsers = query({
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("User is not authenticated");

    const users = await ctx.db.query("users").collect(); // Modified for feature

});

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))

    return user; // Modified for user-profile
});
