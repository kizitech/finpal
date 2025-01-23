import { router } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
import AntDesign from '@expo/vector-icons/AntDesign';
import { CustomButton, FormField } from "../../components";

const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState("Weak");
    const [passwordRequirements, setPasswordRequirements] = useState({
        length: false,
        uppercaseLowercase: false,
        specialCharacter: false,
        number: false,
    });
    const [isPasswordNotEmpty, setIsPasswordNotEmpty] = useState(false);
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const validatePassword = (password) => {
        const requirements = {
            length: password.length >= 8,
            uppercaseLowercase: /[A-Z]/.test(password) && /[a-z]/.test(password),
            specialCharacter: /[!@#$%^&*]/.test(password),
            number: /\d/.test(password),
        };

        setPasswordRequirements(requirements);

        if (requirements.length && requirements.uppercaseLowercase && requirements.specialCharacter && requirements.number) {
            setPasswordStrength("Strong");
        } else if (requirements.length && (requirements.uppercaseLowercase || requirements.specialCharacter || requirements.number)) {
            setPasswordStrength("Not so strong");
        } else {
            setPasswordStrength("Weak");
        }
    };

    const validateInput = () => {
        const newErrors = {
            email: "",
            password: "",
            confirmPassword: "",
        };

        if (!user.email.trim()) newErrors.email = "Email is required.";
        else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email)) newErrors.email = "Email is not valid.";
        if (!user.password.trim()) newErrors.password = "Password is required.";
        if (!user.confirmPassword.trim()) newErrors.confirmPassword = "Password must match.";

        setErrors(newErrors);

        return Object.values(newErrors).every(error => error === "");
    };

    const submit = async () => {

    };

    useEffect(() => {
        const { email, password, confirmPassword } = user;
        const isFormValid = email.length > 0 && password.length > 0 && confirmPassword.length > 0;
        setButtonDisabled(!isFormValid);

        setIsPasswordNotEmpty(password.length > 0);
        validatePassword(password);
    }, [user]);

    return (
        <SafeAreaView className="bg-gray-5 h-full">
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
                        value={user.email}
                        handleChangeText={(e) => setUser({ ...user, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                        placeholder="Enter your email address..."
                    />
                    {errors.email && <Text className='text-red-500 text-sm w-full mt-0.5'>{errors.email}</Text>}

                    <FormField
                        title="Password"
                        value={user.password}
                        handleChangeText={(e) => setUser({ ...user, password: e })}
                        otherStyles="mt-7"
                        placeholder="Enter your password..."
                    />
                    {errors.password && <Text className='text-red-500 text-sm w-full mt-0.5'>{errors.password}</Text>}

                    {isPasswordNotEmpty && (
                        <View className="w-full">
                            <View className='flex flex-row gap-3 items-center mt-4 mb-2'>
                                <Text className='text-sm font-bold'>Password Strength</Text>
                                <Text className={`px-3 py-1 rounded-3xl text-xs font-medium ${passwordStrength === "Strong" ? "bg-green-100 text-green-800" : passwordStrength === "Not so strong" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>{passwordStrength}</Text>
                            </View>
                            <View className="flex flex-col gap-1">
                                <Text className={`text-sm ${passwordRequirements.length ? 'text-green-500' : 'text-gray-500'}`}>
                                    {passwordRequirements.length ? <AntDesign name="checkcircle" /> : <AntDesign name="checkcircleo" />} {""} At least 8 characters
                                </Text>
                                <Text className={`text-sm ${passwordRequirements.uppercaseLowercase ? 'text-green-500' : 'text-gray-500'}`}>
                                    {passwordRequirements.uppercaseLowercase ? <AntDesign name="checkcircle" /> : <AntDesign name="checkcircleo" />} {""} Uppercase and Lowercase letters
                                </Text>
                                <Text className={`text-sm ${passwordRequirements.specialCharacter ? 'text-green-500' : 'text-gray-500'}`}>
                                    {passwordRequirements.specialCharacter ? <AntDesign name="checkcircle" /> : <AntDesign name="checkcircleo" />} {""} At least one special character
                                </Text>
                                <Text className={`text-sm ${passwordRequirements.number ? 'text-green-500' : 'text-gray-500'}`}>
                                    {passwordRequirements.number ? <AntDesign name="checkcircle" /> : <AntDesign name="checkcircleo" />} {""} At least one number
                                </Text>
                            </View>
                        </View>
                    )}

                    <FormField
                        title="Confirm Password"
                        value={user.confirmPassword}
                        handleChangeText={(e) => setUser({ ...user, confirmPassword: e })}
                        otherStyles="mt-7"
                        placeholder="Confirm your password..."
                    />
                    {errors.confirmPassword && <p className='text-red-500 text-sm w-full mt-0.5'>{errors.confirmPassword}</p>}

                    <CustomButton
                        primary
                        title="Create Account"
                        handlePress={() => {
                            submit
                            router.push("/step-1")
                        }}
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
