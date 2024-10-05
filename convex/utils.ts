import { query } from "./_generated/server";
import type { QueryCtx } from "./_generated/server";

export async function getUserID(ctx: QueryCtx) {
  return await ctx.auth.getUserIdentity();
}
