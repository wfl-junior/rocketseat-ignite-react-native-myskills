import { Fragment } from "react";
import { StatusBar } from "react-native";
import { Home } from "./screens/Home";

export const App = () => (
  <Fragment>
    <StatusBar barStyle="light-content" backgroundColor="#121015" />
    <Home />
  </Fragment>
);
