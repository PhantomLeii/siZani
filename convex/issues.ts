import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { getUserID } from "./utils";
import { auth } from "@clerk/nextjs/server";

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
