import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  primary,
  secondary,
  link
}) => {
  // Determine the background and border styles based on the button type
  const buttonStyles =
    primary
      ? "bg-primary"
      : secondary
        ? "bg-white border border-primary"
        : link
          ? "bg-transparent"
          : "";

  // Determine the text color based on the button type
  const textColor =
    primary
      ? "text-white"
      : secondary
        ? "text-primary"
        : link
          ? " text-primary underline"
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
    </TouchableOpacity>
  );
};

export default CustomButton;
