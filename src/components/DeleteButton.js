import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const DeleteButton = (props)=> {
    return (
        <TouchableOpacity>
            <Text 
                style={{ 
                    fontSize : 24, color : 'white', backgroundColor:'red',
                    padding : 16, margin : 10, borderRadius : 8
                }}
                onPress={() => props.onPress()}
            >
                Delete All 
            </Text>
        </TouchableOpacity>

    )
}

export default DeleteButton;