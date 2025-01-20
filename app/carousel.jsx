import React from 'react'
import { View } from 'react-native'
import { router } from 'expo-router'
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
                    handlePress={() => router.push("/sign-up")}
                    containerStyles="w-full mt-14"
                />
                <CustomButton
                    secondary
                    title="Sign In"
                    handlePress={() => router.push("/sign-in")}
                    containerStyles="w-full mt-5"
                />
            </View>
        </View>
    )
}

export default Carousel