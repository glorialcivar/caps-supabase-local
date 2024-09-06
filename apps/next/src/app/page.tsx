import React from "react";

import { PageProps as Props } from "app/types";

const HomePage = async (props: Props) => {
  return (
    <div className="HomePage layout">
      <header className="layout-bleed">Hero</header>
      <div className="layout-content">
        <h1>Home content</h1>
      </div>
    </div>
  );
};

export default HomePage;
