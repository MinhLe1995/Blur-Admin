import React from 'react';
import { View, StyleSheet, Animated } from 'react-native'

export class HighlightBar extends React.Component {
    constructor(props) {
        super(props);
        this.flex = new Animated.Value(0);
        this.animation = this.flex.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%']
        });
    }

    active = (flex) => {
        Animated.timing(this.flex, {
            duration: 250,
            toValue: flex
        }).start();
    }

    render() {
        return(
            <View style = {styles.container}>
                <Animated.View style={[styles.highlisht, {width: this.animation}]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    highlisht: {
        backgroundColor: 'rgba(77, 176, 166, 1)',
        height: 2
    }
});