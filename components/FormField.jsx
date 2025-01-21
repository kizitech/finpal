import { useState } from "react";
import { icons } from "../constants";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-lg pb-1 text-gray-800 font-dssemibold">{title}</Text>

      <View className="w-full h-16 px-4 rounded-full border border-gray-200 focus:border-primary flex flex-row items-center">
        {title === "Email" && <MaterialCommunityIcons name="email-outline" size={22} color="#57534E" />}
        {title === "Password" && <Feather name="lock" size={22} color="#57534E" />}

        <TextInput
          className="flex-1 text-gray-800 font-dssemibold text-base px-2"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#57534E"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-7 h-7"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
