import { Hono } from "hono";
const app = new Hono();

app.get("/", (c) => c.text("Hono server is running."));

app.get("/api/health", (c) => c.text("OK. Healthy."));

export default app;
