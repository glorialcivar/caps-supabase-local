import React from "react";

import App from "./App";
import { appRender, waitFor } from "setupTests";

describe("App", () => {
  it("renders without crashing", async () => {
    await waitFor(() => {
      return appRender(<App />);
    });
  });
});
