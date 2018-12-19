import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Panel, InputField, Button } from '../../components/index';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.scaleValue = new Animated.Value(0);
    }

    render() {
        return (
            <View style={styles.container}>
                <Panel 
                    customStyles = {{paddingVertical: 15}}
                >
                    <InputField 
                        title = 'Email'
                        placeholder = 'Email'
                        isMandatory = {true}
                        customStyles = {{marginBottom: 30}}
                    />
                    <InputField
                        title = 'Password'
                        placeholder = 'Password'
                        isMandatory = {true}
                        customStyles = {{marginBottom: 30}}
                    />
                    
                    <Button />
                    
                </Panel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20
    }
})
export default Login;