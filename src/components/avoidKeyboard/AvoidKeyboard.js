import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Keyboard,
    Dimensions,
    Platform,
} from 'react-native';

const { height: windowHeight } = Dimensions.get('window');

export default class AvoidKeyboard extends Component {

    state = {
        keyboardOffset: 0,
    };

    constructor(props) {
        super(props);

        this.getKeyboardOffsetStyle = this.getKeyboardOffsetStyle.bind(this);
        this.handleKeyboardShow = this.handleKeyboardShow.bind(this);
        this.handleKeyboardHide = this.handleKeyboardHide.bind(this);

        Keyboard.addListener('keyboardDidShow', this.handleKeyboardShow);
        Keyboard.addListener('keyboardWillShow', this.handleKeyboardShow);
        Keyboard.addListener('keyboardWillHide', this.handleKeyboardHide);
        Keyboard.addListener('keyboardDidHide', this.handleKeyboardHide);
    }

    handleKeyboardShow({endCoordinates: { height }}) {
        this.setState({keyboardOffset: height});
    }

    handleKeyboardHide() {
        this.setState({keyboardOffset: 0});
    }

    getKeyboardOffsetStyle() {
        const { keyboardOffset } = this.state;
        return Platform.select({
            ios: () => ({ paddingBottom: keyboardOffset }),
            android: () => ({ height: windowHeight - keyboardOffset }),
        })();
    }

    render() {
        const { children } = this.props;
        const { style } = this;

        return (
            <View style={[style.container, this.getKeyboardOffsetStyle()]}>
                <View style={[style.inner]}>
                    {children}
                </View>
                <TextInput style={[style.input]} />
            </View>
        );
    }

    style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#0f0',
            padding: 0,
            width: '100%'
        },
        inner: {
            flexGrow: 1,
            backgroundColor: '#00f'
        },
        input: {
            height: 40,
            width: 200,
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: '#f0f',
            width: '100%'
        },
    });
};

