import { View, ActivityIndicator, Dimensions, Platform, Text, Image } from "react-native";
import { images } from "../constants"

const Loader = ({ isLoading }) => {
    const osName = Platform.OS;
    const screenHeight = Dimensions.get("screen").height;

    if (!isLoading) return null;

    return (
        <View
            className="absolute flex gap-6 justify-center items-center w-full h-full bg-white z-10"
            style={{
                height: screenHeight,
            }}
        >
            <Image source={images.logo} />
            <Text className="text-base text-primary font-dsblack">LOADING . . .</Text>
            <Text className="text-black font-dsregular text-3xl text-center px-12">We’re getting ready managing your budget.</Text>
            <ActivityIndicator
                animating={isLoading}
                color="#fff"
                size={osName === "ios" ? "large" : 50}
            />
        </View>
    );
};

export default Loader;
