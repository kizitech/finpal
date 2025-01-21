import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
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
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <View
                    className="w-full flex justify-center items-center h-full px-4 mb-6"
                    style={{
                        minHeight: Dimensions.get("window").height - 100,
                    }}
                >
                    <Text className="text-4xl text-gray-800 mt-2 font-dsbold text-center">
                        Please enter your full name
                    </Text>

                    <FormField
                        title=""
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-10"
                        inputStyle="placeholder:text-center placeholder:text-3xl"
                        placeholder="Jonathan F. Doe"
                    />

                    <CustomButton
                        primary
                        title='Continue'
                        icon={true}
                        handlePress={() => {
                            router.push("/step-2")
                            // submit
                        }}
                        containerStyles="mt-16"
                    // isLoading={isSubmitting}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgotPassword