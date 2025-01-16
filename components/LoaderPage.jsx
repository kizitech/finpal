import { View, ActivityIndicator, Dimensions, Platform, Text } from "react-native";

const Loader = ({ isLoading }) => {
    const osName = Platform.OS;
    const screenHeight = Dimensions.get("screen").height;

    if (!isLoading) return null;

    return (
        <View
            className="absolute flex justify-center items-center w-full h-full bg-primary/60 z-10"
            style={{
                height: screenHeight,
            }}
        >
            <Text className="text-black">We’re getting ready managing your budget.</Text>
            <ActivityIndicator
                animating={isLoading}
                color="#fff"
                size={osName === "ios" ? "large" : 50}
            />
        </View>
    );
};

export default Loader;
