import { integer, sqliteTable, text, check } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const subscribers = sqliteTable(
  "subscribers",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    email: text("email").notNull().unique(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
    trafficSource: text("traffic_source"),
    device: text("device").notNull().default("desktop"),
    emailVerified: integer("email_verified", { mode: "timestamp" }),
    unsubscribed: integer("unsubscribed", { mode: "timestamp" }),
    confirmationToken: text("confirmation_token"),
  },
  (table) => [check("email", sql`email LIKE '%@%.%'`)],
);

export type NewSubscriber = typeof subscribers.$inferInsert;
