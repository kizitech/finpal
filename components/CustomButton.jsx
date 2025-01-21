import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  primary,
  secondary,
  link,
  icon
}) => {
  const buttonStyles = primary
    ? "bg-primary"
    : secondary
      ? "bg-white border border-primary"
      : link
        ? "bg-transparent"
        : "";

  const textColor = primary
    ? "text-white"
    : secondary
      ? "text-primary"
      : link
        ? "text-primary underline"
        : "text-black";

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${buttonStyles} rounded-full min-h-[62px] flex flex-row justify-center items-center w-full ${containerStyles} ${isLoading ? "opacity-50" : ""
        }`}
      disabled={isLoading}
    >

      <Text className={`font-dssemibold text-xl ${textColor} ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color={primary ? "#fff" : "#000"}
          size="small"
          className="ml-2"
        />
      )}
      {icon && (
        <View className="ml-2">
          <AntDesign name="arrowright" size={24} color="white" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
