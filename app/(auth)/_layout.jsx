import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Loader } from "../../components";
// import { useGlobalContext } from "../../context/GlobalProvider";

const AuthLayout = () => {
    // const { loading, isLoggedIn } = useGlobalContext();

    // if (!loading && isLoggedIn) return <Redirect href="/home" />;

    return (
        <>
            <Stack>
                <Stack.Screen
                    name="sign-in"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="sign-up"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>

            {/* <Loader isLoading={loading} /> */}
            <StatusBar style="black" />
        </>
    );
};

export default AuthLayout;
