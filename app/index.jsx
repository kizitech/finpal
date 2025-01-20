import "../global.css"
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images, icons } from "../constants";
import { CustomButton, LoaderPage } from "../components";

const checkList = [
    "Finance Companion",
    "Smart Goal Tracking",
    "AI-Powered Budgeting",
    "Achievements & More!",
    "Subscription Management",
]

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

                    <View className="w-full grid justify-center items-center mt-7">
                        <View>
                            {checkList.map((item, index) => (
                                <View key={index} className="flex flex-row items-center mt-4">
                                    <Image
                                        className="w-5 h-5"
                                        resizeMode="contain"
                                        source={icons.checkbox}
                                    />
                                    <Text className="ml-3 text-base font-dsregular text-gray-600">{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <CustomButton
                        primary
                        title="Get Started"
                        handlePress={() => router.push("/sign-in")}
                        containerStyles="w-full mt-14"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Welcome