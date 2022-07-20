import { Fragment, useEffect } from "react";
import { StatusBar } from "react-native";
import codePush from "react-native-code-push";
import SplashScreen from "react-native-splash-screen";
import { Home } from "./screens/Home";

const AppComponent: React.FC = () => {
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });

    SplashScreen.hide();
  }, []);

  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#121015" />
      <Home />
    </Fragment>
  );
};

export const App = codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(AppComponent);
