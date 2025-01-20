import { View, Text } from 'react-native'
import React from 'react'
import { CustomButton, Slider } from '../components'

const Carousel = () => {
    return (
        <View>
            <Slider />
            <View className="px-4 bg-white">
                <CustomButton
                    primary
                    icon={true}
                    title="Get Started"
                    handlePress={() => router.push("/carousel")}
                    containerStyles="w-full mt-14"
                />
                <CustomButton
                    secondary
                    title="Sign In"
                    handlePress={() => router.push("/carousel")}
                    containerStyles="w-full mt-5"
                />
            </View>
        </View>
    )
}

export default Carousel