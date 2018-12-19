import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

class Panel extends React.Component {
    render() {
        const { customStyles } = this.props;
        return(
            <View style={[styles.container, customStyles]}>
                <View style={styles.headerSection}>
                    <Text style={styles.header}>LOGIN</Text>
                </View>
                <ScrollView>
                    {this.props.children}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        flexWrap: 'wrap',
        borderRadius: 5
    },
    headerSection: {
        minHeight: 55,
        borderBottomWidth: 1, 
        borderBottomColor: 'rgba(0, 0, 0, .22)',
        // shadowOffset: {width: 0, height: 0},
        // shadowOpacity: 1,
        // shadowColor: 'white',
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 40,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 1)'
    }
})
export default Panel;