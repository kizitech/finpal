import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
import { CustomButton, FormField } from "../../components";

const ForgotPassword = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = async () => {

    };

    return (
        <SafeAreaView className="bg-gray-5 h-full">
            <ScrollView>
                <View
                    className="w-full flex justify-center items-center h-full px-4 mb-6"
                    style={{
                        minHeight: Dimensions.get("window").height - 100,
                    }}
                >
                    <Image
                        source={images.auth}
                        resizeMode="contain"
                        className="w-[343px] h-60"
                    />

                    <Text className="text-4xl text-gray-80 mt-2 font-dsblack text-center">
                        Forgot Password
                    </Text>
                    <Text className="text-xl text-gray-60 mt-2 font-dsregular text-center">
                        Please enter your email address to reset your password.
                    </Text>

                    <FormField
                        title="Email Address"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                        placeholder="Enter your email address..."
                    />

                    <CustomButton
                        primary
                        title="Continue"
                        handlePress={() => {
                            router.push("/password-reset")
                            // submit
                        }}
                        containerStyles="mt-8"
                    // isLoading={isSubmitting}
                    />

                    <View className="mt-5">
                        <Text className="text-base text-center text-gray-60 font-dsregular mt-4">Don’t remember your email?</Text>
                        <Text className="text-base text-center text-gray-60 font-dsregular mt-1">
                            Contact us at {""}
                            <Link
                                className="text-brand-60 font-dsbold underline"
                                href="mailto:help@finpal.ai"
                            >help@finpal.ai</Link>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgotPassword