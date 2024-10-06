import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getUserID } from "./utils";

export const createIssue = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    imageId: v.id("_storage"),
  },

  handler: async (ctx, args) => {
    const userId = await getUserID(ctx);
    if (!userId) {
      throw new Error("User not found");
    }

    const imageUrl = await ctx.storage.getUrl(args.imageId);

    const issue = ctx.db.insert("issues", {
      author: userId,
      title: args.title,
      description: args.description,
      imageUrl: imageUrl,
    });

    if (!issue) {
      return 1;
    }

    return 0;
  },
});

export const listIssues = query({
  args: {},

  handler: async (ctx) => {
    const userId = await getUserID(ctx);
    if (!userId) {
      throw new Error("User not found");
    }

    const issues = await ctx.db.query("issues").order("desc").take(100);

    return issues;
  },
});
