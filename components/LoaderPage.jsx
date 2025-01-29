import React from 'react';
import { View, ActivityIndicator, Dimensions, Platform, Text, Image, useColorScheme } from "react-native";
import { images } from "../constants";

const Loader = ({ isLoading }) => {
    const osName = Platform.OS;
    const screenHeight = Dimensions.get("screen").height;
    const colorScheme = useColorScheme();

    if (!isLoading) return null;

    const activityIndicatorColor = colorScheme === 'dark' ? '#fff' : '#000';

    return (
        <>
            <View
                className="absolute flex gap-10 justify-center items-center w-full h-full bg-gray-0 dark:bg-gray-90 z-10"
                style={{
                    height: screenHeight,
                }}
            >
                <View className="grid gap-10 justify-center items-center w-full">
                    <Image source={images.logo} resizeMode="contain" className="h-24 w-24" />
                    <Text className="text-base text-brand-60 font-dsblack">LOADING . . .</Text>
                    <Text className="text-gray-80 dark:text-gray-0 font-dsregular text-3xl text-center px-12">We’re getting ready managing your budget.</Text>
                </View>
                <View className="relative top-40">
                    <ActivityIndicator
                        animating={isLoading}
                        color={activityIndicatorColor}
                        size={osName === "ios" ? "large" : 50}
                    />
                </View>
            </View>
        </>
    );
};

export default Loader;