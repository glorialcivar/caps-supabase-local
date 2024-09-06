import React from "react";
import { View } from "react-native";

import Providers from "./Providers";
import { render } from "setupTests";

describe("Providers", () => {
  it("renders with default props", () => {
    render(
      <Providers>
        <View />
      </Providers>
    );
  });
});
