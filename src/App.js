import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Base } from "./components/Base";

export const App = () => (
  <Provider store={store}>
    <Base />
  </Provider>
);
