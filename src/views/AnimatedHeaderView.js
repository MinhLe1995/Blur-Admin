import React from 'react';
import {Platform, StyleSheet, Text, View, Animated } from 'react-native';
import { HEADER_MAX_HEIGHT } from '../config/config';
import { Container, AnimatedHeader } from '../components/index';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

export class AnimatedHeaderView extends React.Component {
    constructor(props) {
      super(props);
      this.nativeScrollY = new Animated.Value(Platform.OS == 'ios' ? -HEADER_MAX_HEIGHT : 0);
    }
  
    renderList() {
      return data.map(item => (
        <View style={styles.item} key={item}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))
    }
  
    render() {
      let nativeScrollY = Animated.add(this.nativeScrollY, Platform.OS == 'ios' ? HEADER_MAX_HEIGHT : 0);
  
      return (
        <Container>
            <AnimatedHeader title = 'Animated API' nativeScrollY = {nativeScrollY} />
            <Animated.ScrollView
                style={{flex: 1, paddingTop: Platform.OS == 'ios' ? 0: HEADER_MAX_HEIGHT}}
                scrollEventThrottle={1}
                onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: this.nativeScrollY}}}],
                {useNativeDriver: true}
                )}
                contentInset={{top: HEADER_MAX_HEIGHT}}
                contentOffset={{y: -HEADER_MAX_HEIGHT}}
            >
            {this.renderList()}
            </Animated.ScrollView>
        </Container>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    item: {
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
      margin: 8,
      borderRadius: 5
    },
    itemText: {
      color: 'rgba(255, 255, 255, 0.75)',
      fontSize: 20,
      padding: 20,
    },
    headerWrapper: {
      backgroundColor: 'red'
    }
  });
  
  export default AnimatedHeaderView;