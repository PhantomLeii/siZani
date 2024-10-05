import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { getUserID } from "./utils";

export const createIssue = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    imageUrl: v.string(),
  },

  handler(ctx, args) {
    const user = getUserID(ctx);
    if (!user) {
      throw new Error("User not found");
    }

    const issue = ctx.db.insert("issues", {
      title: args.title,
      description: args.description,
      imageUrl: args.imageUrl,
      userId: user,
    });

    if (!issue) {
      return 1;
    }

    return 0;
  },
});
