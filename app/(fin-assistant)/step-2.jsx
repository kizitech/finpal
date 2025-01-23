import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, TouchableOpacity, Alert, Image } from "react-native";
import { images } from "../../constants";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CustomButton, FormField } from "../../components";
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ForgotPassword = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = async () => {

    };

    const buttonData = [
        {
            "id": 1,
            "title": 'I want to control my budget',
            "icons": <FontAwesome5 name="money-bill-alt" size={24} color="black" />
        },
        {
            "id": 2,
            "title": 'I want to save more money',
            "icons": <MaterialCommunityIcons name="piggy-bank-outline" size={24} color="black" />
        },
        {
            "id": 3,
            "title": 'I want finance AI Companion',
            "icons": <Feather name="cpu" size={24} color="black" />
        },
        {
            "id": 4,
            "title": 'I want to track my expenses',
            "icons": <AntDesign name="creditcard" size={24} color="black" />
        },
        {
            "id": 5,
            "title": 'I want to manage subscription',
            "icons": <Ionicons name="receipt-outline" size={24} color="black" />
        },
        {
            "id": 6,
            "title": 'I want to build emergency fund',
            "icons": <Feather name="umbrella" size={24} color="black" />
        },
        {
            "id": 7,
            "title": 'I just want to try the app',
            "icons": <Octicons name="device-mobile" size={24} color="black" />
        }
    ]

    return (
        <SafeAreaView className="pt-4 h-full">
            <ScrollView>
                <View
                    className="w-full flex justify-center items-center h-full px-4 mb-6"
                    style={{
                        minHeight: Dimensions.get("window").height - 100,
                    }}
                >
                    <Text className="text-4xl w-[240px] leading-[50px] text-gray-800 mt-2 font-dsbold text-center">
                        What’s your app purpose?
                    </Text>

                    <View className="w-full flex active:border-1 active:border-brand-60 mt-4 px-5">
                        {buttonData.map((button) => (
                            <View
                                key={button.id} onPress={button.onPress}
                                className="flex gap-4 items-center rounded-[11px] justify-start px-4 text-2xl py-4 bg-white my-2 flex-row w-full">
                                <Text>{button.icons}</Text>
                                <Text>{button.title}</Text>
                            </View>
                        ))}
                    </View>

                    <CustomButton
                        primary
                        title='Continue'
                        icon={true}
                        handlePress={() => {
                            router.push("/step-3")
                            // submit
                        }}
                        containerStyles="mt-14"
                    // isLoading={isSubmitting}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgotPassword