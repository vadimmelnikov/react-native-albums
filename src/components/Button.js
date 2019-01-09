import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) =>{
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonText: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 5,
        marginRight: 5,
    }
};

export default Button;
