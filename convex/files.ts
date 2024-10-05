import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { getUserID } from "./utils";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const saveFile = mutation({
  args: {
    storageId: v.id("storage"),
    author: v.string(),
  },

  handler(ctx, args) {
    const userId = getUserID(ctx);
    if (!userId) {
      throw new Error("User not found");
    }

    const file = ctx.db.insert("files", {
      storageId: args.storageId,
      author: args.author,
    });

    if (!file) {
      return 1;
    }

    return 0;
  },
});
