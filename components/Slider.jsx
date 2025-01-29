import React, { useRef, useState } from 'react';
import Pagination from "./Pagination"
import SlideItem from "./SlideItem"
import Slides from "../constants/carouselData";
import { Animated, FlatList, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Slider = () => {
    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleOnScroll = Animated.event(
        [
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX,
                    },
                },
            },
        ],
        {
            useNativeDriver: false,
        }
    );

    const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    return (
        <View className="bg-brand-5">
            <FlatList
                data={Slides}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                snapToInterval={width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <SlideItem item={item} />}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
            <Pagination data={Slides} scrollX={scrollX} />
        </View>
    );
};

export default Slider;
