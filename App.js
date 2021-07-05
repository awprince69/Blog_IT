import { StatusBar as ExpoStatuesBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Src/Infrastructure/Theme";
import { useFonts as useTeko, Teko_400Regular } from "@expo-google-fonts/teko";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./Src/Infrastructure/Navigation";
import firebase from "firebase/app";
import { firebaseConfig } from "./Src/Services/Firebase/Firebase.config";
import { AuthenticationContextProvider } from "./Src/Services/Authentication/AuthenticationContext";

export default function App() {
  const [tekoLoaded] = useTeko({
    Teko_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!tekoLoaded || !latoLoaded) {
    return null;
  }
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatuesBar style="auto" />
    </>
  );
}
