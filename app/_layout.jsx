import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "DMSans-Black": require("../assets/fonts/DMSans-Black.ttf"),
        "DMSans-Bold": require("../assets/fonts/DMSans-Bold.ttf"),
        "DMSans-ExtraBold": require("../assets/fonts/DMSans-ExtraBold.ttf"),
        "DMSans-ExtraLight": require("../assets/fonts/DMSans-ExtraLight.ttf"),
        "DMSans-Light": require("../assets/fonts/DMSans-Light.ttf"),
        "DMSans-Medium": require("../assets/fonts/DMSans-Medium.ttf"),
        "DMSans-Regular": require("../assets/fonts/DMSans-Regular.ttf"),
        "DMSans-SemiBold": require("../assets/fonts/DMSans-SemiBold.ttf"),
        "DMSans-Thin": require("../assets/fonts/DMSans-Thin.ttf"),
    });

    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded) {
        return null;
    }

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="black" />
        </>
    );
};

export default RootLayout;
