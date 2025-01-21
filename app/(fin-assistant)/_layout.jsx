import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Loader } from "../../components";
// import { useGlobalContext } from "../../context/GlobalProvider";

const AssistantLayout = () => {
    // const { loading, isLoggedIn } = useGlobalContext();

    // if (!loading && isLoggedIn) return <Redirect href="/home" />;

    return (
        <>
            <Stack>
                <Stack.Screen
                    name="step-1"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="step-2"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="step-3"
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

export default AssistantLayout;
