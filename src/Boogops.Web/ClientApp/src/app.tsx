import React from "react";

import ThemeConfig from "./theme";
import { ScrollToTop } from "./components";
import GlobalStyles from "./theme/global-styles";

function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <>Hi Heath</>
    </ThemeConfig>
  );
}

export default App;
