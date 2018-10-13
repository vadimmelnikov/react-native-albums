import React from 'react';
import {Text, View} from 'react-native';


const Header = (props) => {
        return (
            <View style={style.viewStyle}>
                <Text style={style.textStyle}>{props.headerText}</Text>
            </View>
        )
    }
;

const style = {
    viewStyle:{
        backgroundColor: '#ccc',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        evelation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
    }
}

export default Header;