import http from "http";
import cluster from "cluster";
import os from "os";
import { initApplicaton } from "./app";
import { initDatabases } from "@/databases";
import { profile } from "@/configurations";

const startServer = async () => {
  const numCPUs = os.cpus().length;

  if (cluster.isPrimary) {
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  } else {
    await initDatabases();
    const app = initApplicaton();
    const server: http.Server = http.createServer(app);

    const HOST = profile.app.host;
    const PORT = profile.app.port;

    server.listen(PORT, HOST, async () => {
      console.log(`Server is running on http://${HOST}:${PORT}`);
    });
  }
};

startServer();
