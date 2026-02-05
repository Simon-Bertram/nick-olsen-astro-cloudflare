import { ConsoleLogWriter } from "drizzle-orm";

const destroyTestDb = async () => {
  await Bun.file("test.sqlite").delete();
  console.log("Test database destroyed successfully");
};

destroyTestDb();
