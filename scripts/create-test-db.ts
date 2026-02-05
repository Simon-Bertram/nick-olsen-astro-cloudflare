import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

const createTestDb = async () => {
  const testDb = Bun.file("test.sqlite");
  if (await testDb.exists()) {
    await testDb.delete();
  }
  try {
    const sqlite = new Database("test.sqlite");
    const db = drizzle(sqlite);
    migrate(db, { migrationsFolder: "src/server/db/migrations" });
    console.log("Test database created successfully");
  } catch (error) {
    console.error("Error creating test database:", error);
    process.exit(1);
  }
};

createTestDb();
