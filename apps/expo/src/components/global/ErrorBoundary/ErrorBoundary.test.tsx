import React from "react";
import { View } from "react-native";

import ErrorBoundary from "./ErrorBoundary";
import { render } from "setupTests";

describe("ErrorBoundary", () => {
  it("renders with default props", async () => {
    render(
      <ErrorBoundary>
        <View />
      </ErrorBoundary>
    );
  });
});
