import React from "react";

import MessageBoundary from "./MessageBoundary";
import { render } from "setupTests";

describe("MessageBoundary", () => {
  it("renders with default props", () => {
    render(
      <MessageBoundary
        buttonText="click me"
        description="Reload this problem"
        onClick={() => {}}
        title="Whoops"
      />
    );
  });
});
