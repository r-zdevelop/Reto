import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={{
            width: "100%",
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: '#eef1f6',
            borderBottomWidth: 2,
        }}>
            <Text style={{
                color: '#0f265c',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: 20,
            }}>Banco</Text>
        </View>
    );
}

export default Header;