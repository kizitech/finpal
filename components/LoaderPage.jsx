import { View, ActivityIndicator, Dimensions, Platform, Text, Image } from "react-native";
import { images } from "../constants"

const Loader = ({ isLoading }) => {
    const osName = Platform.OS;
    const screenHeight = Dimensions.get("screen").height;

    if (!isLoading) return null;

    return (
        <>
            <View
                className="absolute flex gap-10 justify-center items-center w-full h-full bg-gray-0 z-10"
                style={{
                    height: screenHeight,
                }}
            >
                <View className="grid gap-10 justify-center items-center w-full">
                    <Image source={images.logo} />
                    <Text className="text-base text-brand-60 font-dsblack">LOADING . . .</Text>
                    <Text className="text-gray-80 font-dsregular text-3xl text-center px-12">We’re getting ready managing your budget.</Text>
                </View>
                <View className="relative top-40">
                    <ActivityIndicator
                        animating={isLoading}
                        color="#000"
                        size={osName === "ios" ? "large" : 50}
                    />
                </View>
            </View>
        </>
    );
};

export default Loader;
