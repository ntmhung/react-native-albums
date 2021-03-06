// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


//Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerTitle}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 35,
        shadowColor: '#000',
        shadowOffset: { 
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative' 
    },
    textStyle: {
        fontSize: 40
    }
};

//Make the component available to other part of the app
export default Header;
