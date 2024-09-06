import React from "react";

import ErrorBoundary from "./ErrorBoundary";
import { render } from "setupTests";

describe("ErrorBoundary", () => {
  it("renders with default props", () => {
    render(
      <ErrorBoundary
        error={{ message: "error", name: "error", cause: "dunno" }}
        reset={() => {}}
      />
    );
  });
});
