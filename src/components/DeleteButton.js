import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const DeleteButton = ()=> {
    return (
        <TouchableOpacity>
            <Text style={{ fontSize : 24, color : 'white', backgroundColor:'red' }}>
                Delete All 
            </Text>
        </TouchableOpacity>

    )
}

export default DeleteButton;