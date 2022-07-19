import { Fragment, useEffect } from "react";
import { StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { Home } from "./screens/Home";

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#121015" />
      <Home />
    </Fragment>
  );
};
