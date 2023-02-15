import React from "react";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const BottomMenu=()=> {
    return (
        <View style={{backgroundColor:'#788D6D', width: '100%', height:'20%', marginTop:320}}>
         <FontAwesome name="home" size={45} color="#5E3A24"></FontAwesome>
            
        </View>
    )
 
};

export default BottomMenu;