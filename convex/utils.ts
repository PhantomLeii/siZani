import { query } from "./_generated/server";
import type { QueryCtx } from "./_generated/server";

export async function getUserID(ctx: QueryCtx) {
  const user = await ctx.auth.getUserIdentity();
  if (!user) {
    return null;
  }

  return user.tokenIdentifier;
}
