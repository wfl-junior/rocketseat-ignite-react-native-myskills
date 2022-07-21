import * as Sentry from "@sentry/react-native";
import { Fragment, useEffect } from "react";
import { StatusBar } from "react-native";
import codePush from "react-native-code-push";
import SplashScreen from "react-native-splash-screen";
import { Home } from "./screens/Home";

Sentry.init({
  dsn: "https://a40fe8d16faf41adb97321c3a7e9f202@o1327587.ingest.sentry.io/6588944",
  tracesSampleRate: 1.0,
  enableNative: false,
});

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

export const App = Sentry.wrap(
  codePush({
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  })(AppComponent),
);
