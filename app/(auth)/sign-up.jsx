import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
import { CustomButton, FormField } from "../../components";

const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = async () => {
        // if (form.username === "" || form.email === "" || form.password === "") {
        //     Alert.alert("Error", "Please fill in all fields");
        // }

        // setIsSubmitting(true);
        // try {
        //     const result = await createUser(form.email, form.password, form.username);
        //     setUser(result);
        //     setIsLoggedIn(true);

        //     router.replace("/sign-in");
        // } catch (error) {
        //     Alert.alert("Error", error.message);
        // } finally {
        //     setIsSubmitting(false);
        // }
    };

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <View
                    className="w-full flex justify-center items-center h-full px-4 my-6"
                    style={{
                        minHeight: Dimensions.get("window").height - 100,
                    }}
                >
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-24 h-20"
                    />

                    <Text className="text-4xl text-gray-800 mt-7 font-dsblack mb-10">
                        Sign Up to finpal
                    </Text>

                    <FormField
                        title="Email Address"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                        placeholder="Enter your email address..."
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                        placeholder="Enter your password..."
                    />
                    <FormField
                        title="Confirm Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                        placeholder="Confirm your password..."
                    />

                    <CustomButton
                        primary
                        title="Create Account"
                        handlePress={submit}
                        containerStyles="mt-14"
                    />

                    <CustomButton
                        link
                        title="I Already Have Account"
                        handlePress={() => { router.push("/sign-in") }}
                        containerStyles="mt-4"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
