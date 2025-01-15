import "../global.css";
import { SplashScreen, Slot } from "expo-router";
import { Screen } from "expo-router/build/views/Screen";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return <Slot />
};

export default RootLayout;
