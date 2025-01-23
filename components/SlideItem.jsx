import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Easing,
} from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('screen');

const SlideItem = ({ item }) => {
    const translateYImage = new Animated.Value(40);

    Animated.timing(translateYImage, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
        easing: Easing.bounce,
    }).start();

    return (
        <View style={[styles.halfScreen, { height: height - 240 }]}>
            <Animated.Image
                source={item.img}
                resizeMode="contain"
                style={[
                    styles.image,
                    {
                        transform: [
                            {
                                translateY: translateYImage,
                            },
                        ],
                    },
                ]}
            />

            <View style={styles.content}>
                <Text className="text-3xl font-dsblack text-gray-800 text-center">{item.title}</Text>
                <Text className="text-lg font-dsregular text-gray-600 text-center mt-5">{item.description}</Text>
            </View>
        </View>
    );
};

export default SlideItem;

const styles = StyleSheet.create({
    halfScreen: {
        width,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0.6,
        width: '100%',
    },
    content: {
        paddingTop: 20,
        alignItems: 'center',
    },
});