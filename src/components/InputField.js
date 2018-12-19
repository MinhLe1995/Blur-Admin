import React from 'react';
import { TextInput, StyleSheet, Animated, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { HighlightBar } from './HighlightBar';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.borderColor = new Animated.Value(0);
        this.animation = this.borderColor.interpolate({
            inputRange: [0, 100],
            outputRange: ['transparent', 'rgba(77, 176, 166, 1)']
        });
    }

    _onFocus = (value) => {
        Animated.timing(this.borderColor, {
            duration: 250,
            toValue: value
        }).start();
    }

    render() {
        const { title, placeholder, keyboardType, isMandatory, customStyles } = this.props;
        return (
            <View style={customStyles}>
                <Text style={styles.title}>{isMandatory ? `${title}*` : title}</Text>
                <Animated.View style={[styles.container, {borderColor: this.animation}]}>
                    <TextInput
                        style = {styles.textInput}
                        placeholder = {placeholder}
                        placeholderTextColor = 'rgba(255, 255, 255, 0.5)'
                        keyboardType = {keyboardType}
                        onFocus = {() => { 
                            //this._onFocus(100) 
                            this._highlightBar.active(1)
                        }}
                        onBlur = {() => { 
                            //this._onFocus(0) 
                            this._highlightBar.active(0)
                        }}
                    />
                    <HighlightBar 
                        ref = {highlightBar => this._highlightBar = highlightBar}
                    />
                </Animated.View>
            </View>
        );
    }
}
InputField.defaultProps = {
    title: 'Title',
    placeholder: 'Placeholder',
    keyboardType: 'default',
    isMandatory: true,
    customStyles: {}
}

InputField.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    isMandatory: PropTypes.bool,
    customStyles: PropTypes.object
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 5,
        borderWidth: 1
    },
    textInput: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 18,
        fontWeight: '400',
        margin: 10
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 1)',
        marginBottom: 7
    }
});

export default InputField;