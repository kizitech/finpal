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
  inputStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const renderIcon = () => {
    if (title.toLowerCase().includes("email")) {
      return <MaterialCommunityIcons name="email-outline" size={22} color="#57534E" />;
    }
    if (title.toLowerCase().includes("password")) {
      return <Feather name="lock" size={22} color="#57534E" />;
    }
    return null;
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-lg pb-1 text-gray-80 font-dssemibold">{title}</Text>

      <View className="w-full h-16 px-4 rounded-full border border-gray-200 focus:border-brand-60 flex flex-row items-center">
        {renderIcon()}

        <TextInput
          className={`flex-1 text-gray-80 font-dsregular text-base px-2 ${inputStyle}`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#57534E"
          onChangeText={handleChangeText}
          secureTextEntry={title.toLowerCase().includes("password") && !showPassword}
          {...props}
        />

        {title.toLowerCase().includes("password") && (
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
