import "../global.css"
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, LoaderPage } from "../components";

const Welcome = () => {
    return (
        <SafeAreaView className="bg-white h-full">
            <LoaderPage isLoading={false} />
            <ScrollView
                contentContainerStyle={{
                    height: "100%",
                }}
            >
                <View className="w-full flex justify-center items-center h-full px-4">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />

                    <Text className="text-5xl font-dsblack text-gray-800 mt-5 tracking-[-0.1px] text-center">finpal</Text>

                    <Text className="text-2xl font-dsregular text-gray-600 mt-7 text-center">
                        Your Smart Personal Finance AI Companion UI Kit
                    </Text>

                    <CustomButton
                        title="Get Started"
                        handlePress={() => router.push("/sign-in")}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Welcome