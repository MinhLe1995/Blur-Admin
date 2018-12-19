import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Easing } from 'react-native';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.scaleValue = new Animated.Value(0);
        this.scale = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.1, 1.2]
        });
    }

    _onPressIn = () => {
        //this.scaleValue.setValue(0);
        Animated.timing(this.scaleValue, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }

    _onPressOut = () => {
        Animated.timing(this.scaleValue, {
            toValue: 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }

    render() {
        const scale = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.025, 1.05]
        });
        let transform = { ...styles.container, transform: [{scale: scale}]}
        return (
            <View>
                <TouchableWithoutFeedback
                    onPressIn = {() => { this._onPressIn()}}
                    onPressOut = {() => { this._onPressOut()}}
                >  
                    <Animated.View style = {transform}>
                        <Text style = {styles.text}>Text</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 100,
        padding: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible'
    },
    text: {
        color: '#fff'
    }
})
export default Button;