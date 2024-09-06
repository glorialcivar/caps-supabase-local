import React from "react";

import Home from "./Home";
import { render } from "setupTests";

describe("Home", () => {
  it("renders with default props", () => {
    render(<Home />);
  });
});
