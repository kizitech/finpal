import React, { useRef, useState } from 'react'
import { SlideItem, Pagination } from '../components'
import Slides from "../constants/carouselData"
import { Animated, FlatList, StyleSheet, Text, View } from 'react-native'

const Slider = () => {
    const [index, setIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleOnScroll = event => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX
                        }
                    }
                }
            ],
            {
                useNativeDriver: false,
            },
        )(event);
    }

    const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
        setIndex(viewableItems[0].index);
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    return (
        <View className="bg-white">
            <FlatList
                data={Slides}
                horizontal
                pagingEnabled
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <SlideItem item={item} />}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
            <Pagination data={Slides} scrollX={scrollX} />
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({})