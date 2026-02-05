import { it, expect, mock } from "bun:test";
import { eq } from "drizzle-orm";
import type { D1Database } from "@cloudflare/workers-types";
import { insertSubscriber } from "./queries";
import { getTestDb } from "../../../test/get-test-db";
import { subscribers } from "./schema";

mock.module("./db.ts", () => {
  return {
    getDb: () => getTestDb(),
  };
});

it("should insert a subscriber into the test database", async () => {
  const db = await getTestDb();

  const newSub = { email: "test@example.com" };

  await db.insert(subscribers).values(newSub);

  const result = await db
    .select()
    .from(subscribers)
    .where(eq(subscribers.email, newSub.email));

  expect(result[0]).toBeDefined();
  expect(result[0]?.email).toBe(newSub.email);
});

it("throws an error when inserting a duplicate email", async () => {
  const newSub = { email: "test@example.com" };
  await expect(insertSubscriber({} as D1Database, newSub)).rejects.toThrow();
});
