import React from "react";

import ScreenTemplate from "./ScreenTemplate.screen";
import { render } from "setupTests";

describe("ScreenTemplate page", () => {
  it("renders without crashing", async () => {
    render(<ScreenTemplate />);
  });
});
