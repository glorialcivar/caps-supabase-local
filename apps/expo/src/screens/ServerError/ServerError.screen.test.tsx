import React from "react";

import ServerError from "./ServerError.screen";
import { ServerErrorRoute } from "./ServerError.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("ServerError screen", () => {
  it("renders without crashing", async () => {
    render(
      <ServerError
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<ServerErrorRoute>({ name: "ServerError" })}
      />
    );
  });
});
