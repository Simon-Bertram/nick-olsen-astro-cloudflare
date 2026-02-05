import type { D1Database } from "@cloudflare/workers-types";
import { getDb } from "./db";
import type { NewSubscriber } from "./schema";
import * as schema from "./schema";
import { eq } from "drizzle-orm";

export const insertSubscriber = async (
  d1Database: D1Database,
  newSubscriber: NewSubscriber,
) => {
  const db = getDb(d1Database);
  const result = await db
    .insert(schema.subscribers)
    .values(newSubscriber)
    .returning();
  return result;
};

export const getSubscriberByEmail = async (
  d1Database: D1Database,
  email: string,
) => {
  const db = getDb(d1Database);
  const result = await db
    .select()
    .from(schema.subscribers)
    .where(eq(schema.subscribers.email, email));
  return result[0];
};
