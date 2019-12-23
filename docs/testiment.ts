import React from "react";
import { buildConfig } from "@cd2/testiment";

export default buildConfig({
  sidebar: [
    {
      name: "docs",
      sub: [{ name: "Getting Started", page: "$root" }]
    }
  ],
  pages: { $root: React.lazy(() => import("./pages/GettingStarted.mdx")) }
});
