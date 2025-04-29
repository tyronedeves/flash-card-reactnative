// component/flashCards.jsx
import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'

const FlashCards = ({french, english}) => {
    const [showTranslation, setShowTranslation] = useState(false);
    const colorAnimation = useRef(new Animated.Value(0)).current;
    
    // Update animation when showTranslation changes
    useEffect(() => {
        Animated.timing(colorAnimation, {
            toValue: showTranslation ? 1 : 0,
            duration: 300,
            useNativeDriver: false, // We need this to be false for backgroundColor
        }).start();
    }, [showTranslation]);
    
    // Interpolate the backgroundColor based on animation value
    const backgroundColor = colorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#8A2BE2', '#87CEEB'] // Purple to Sky Blue
    });
    
    const handleFlip = () => {
        setShowTranslation(!showTranslation);
    };
    
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.cardContainer, { backgroundColor }]}>
                <TouchableOpacity 
                    onPress={handleFlip} 
                    style={styles.card}
                    activeOpacity={0.8}
                >
                    <Text style={styles.text}>
                        {showTranslation ? english : french}
                    </Text>
                    <Text style={styles.hint}>
                        {showTranslation ? "Tap to see French" : "Tap to see English"}
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

export default FlashCards

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    cardContainer: {
        padding: 30,
        margin: 20,
        width: 280,
        height: 200,
        borderRadius: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    card: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    hint: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 15,
        textAlign: 'center',
    }
})