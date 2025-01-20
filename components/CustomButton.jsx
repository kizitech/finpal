import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../constants";

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
      className={`${buttonStyles} rounded-full min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""
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
        <View className="mr-2">
          <Image
            className="ml-2 h-5 w-5"
            resizeMode="contain"
            source={icons.arrowRight}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
