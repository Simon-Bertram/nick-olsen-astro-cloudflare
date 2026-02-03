import { useEffect, useState } from "react";

export const ServerStatus = () => {
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStatus(data.message);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return (
    <div>
      <p>{status}</p>
      {error && <p>Error: {error}</p>}
    </div>
  );
};
