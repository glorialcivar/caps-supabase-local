import React from "react";

import Home from "./Home.screen";
import { HomeRoute } from "./Home.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("Home screen", () => {
  it("renders without crashing", async () => {
    render(
      <Home
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<HomeRoute>({ name: "Home" })}
      />
    );
  });
});
