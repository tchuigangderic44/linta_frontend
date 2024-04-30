import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";

import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./context/context.tsx";
import { lazy } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const App = lazy(() => import("./App.tsx"));
import Loader from "./components/Loader.component.tsx";
import theme from "./theme/theme.ts";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import "./global.css";

//type Props = {}
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Router>
        <React.Suspense fallback={<Loader />}>
          <NavigationProgress />
          <Provider store={store}>
            <ContextProvider>
              <App />
            </ContextProvider>
          </Provider>
        </React.Suspense>
      </Router>
    </MantineProvider>
  </React.StrictMode>
);
