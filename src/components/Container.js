import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

class Container extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <ImageBackground
                source = {require('../assets/blur-bg.jpg')}
                resizeMode = 'cover'
                style = {styles.container}
            >
                {children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});

export default Container;