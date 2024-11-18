import http from "http";
import { initApplicaton } from "./app";
import { initDatabases } from "@/databases";
import { profile } from "@/configurations";

const startServer = async () => {
  await initDatabases();
  const app = initApplicaton();
  const server: http.Server = http.createServer(app);

  const HOST = profile.app.host;
  const PORT = profile.app.port;

  server.listen(PORT, HOST, async () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
  });
};

startServer();
