import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, ScrollView, Dimensions, Alert, Image } from "react-native";
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
        <SafeAreaView className="bg-gray-50 px-4 h-full">
            <ScrollView>
                <View
                    className="w-full flex justify-center items-center h-full px-4 mb-6"
                    style={{
                        minHeight: Dimensions.get("window").height - 100,
                    }}
                >
                    <Text className="text-4xl text-gray-800 leading-[45px] mt-2 font-dsbold text-center">
                    What do you do for a living?
                    </Text>

                    <TextInput
                        className="placeholder:text-gray-700 placeholder:text-xl h-[330px] bg-white w-full px-3 pb-[40px] pt-3 mt-4"
                        placeholder="Enter your description..."
                    />

                    <CustomButton
                        inactive
                        title='Continue'
                        // icon={true}
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