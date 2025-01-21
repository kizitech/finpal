import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";

import { images } from "../../constants";
import { CustomButton } from "../../components";

const PasswordReset = () => {
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <View
                    className="w-full flex justify-center items-center h-full px-4 mb-6"
                    style={{
                        minHeight: Dimensions.get("window").height - 100,
                    }}
                >
                    <Image
                        source={images.passwordReset}
                        resizeMode="contain"
                        className="w-[343px] h-[316px]"
                    />

                    <Text className="text-4xl text-gray-800 mt-2 font-dsblack text-center">
                        Password Reset Sent.
                    </Text>
                    <Text className="text-xl text-gray-600 mt-2 font-dsregular text-center">
                        Please check your email in a few minutes - we’ve sent you an email containing password recovery link.
                    </Text>

                    <CustomButton
                        primary
                        title="Continue"
                        handlePress={() => {
                            router.push("/sign-in")
                        }}
                        containerStyles="mt-8"
                    />

                    <View className="max-w-[190px] mt-5">
                        <Text className="text-base text-gray-600 font-dsregular mt-4">Don’t remember your email?
                            {""} Contact us at {""}
                            <Link
                                className="text-primary font-dsbold underline"
                                href="mailto:help@finpal.ai"
                            >help@finpal.ai</Link>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PasswordReset