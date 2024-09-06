import React from "react";

import Layout from "./Layout";
import { render, waitFor } from "setupTests";

describe("Layout", () => {
  it("renders with default props", async () => {
    await waitFor(() => {
      return render(<Layout />);
    });
  });
});
