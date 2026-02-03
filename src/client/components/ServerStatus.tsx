import { useEffect, useState } from "react";

export const ServerStatus = () => {
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          setStatus(data.message ?? text ?? "OK");
        } catch {
          setStatus(text || "OK");
        }
      })
      .catch((err) => {
        setError(err instanceof Error ? err : new Error(String(err)));
        setStatus("");
      });
  }, []);
  return (
    <div>
      <h1>Server Status</h1>
      <p className="text-green-700">{status}</p>
      {error && (
        <p className="text-red-700">Error: {error?.message ?? String(error)}</p>
      )}
    </div>
  );
};
