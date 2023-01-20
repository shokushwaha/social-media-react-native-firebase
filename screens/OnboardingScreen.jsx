import { Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            onSkip={() => navigation.navigate('Login')}
            onDone={() => navigation.navigate('Login')}

            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/onboard1.png')} />,
                    title: 'Connect to the world',
                    subtitle: 'A new and awesome way to connect to the world',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboard2.png')} />,
                    title: 'Share your favorites',
                    subtitle: 'Share your thoughts with similar kind of audience',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboard3.png')} />,
                    title: 'Become the star',
                    subtitle: 'Let the world see you',
                },
            ]}
        />
    )
}

export default OnboardingScreen