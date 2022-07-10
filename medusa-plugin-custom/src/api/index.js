import { Router } from "express";
import cors from "cors";
import { getConfigFile } from "medusa-core-utils";

export default (rootDirectory) => {
  const router = Router();

  const { configModule } = getConfigFile(rootDirectory, "medusa-config");
  const { projectConfig } = configModule;

  const corsOptions = {
    origin: projectConfig.store_cors.split(","),
    credentials: true,
  };

  router.options("/hello-world", cors(corsOptions));

  router.get("/hello-world", cors(corsOptions), (req, res) => {
    res.json({ message: "Welcome to my new plugin!" });
  });

  return router;
};
