import React from "react";
import { View } from "react-native";
import SearchInput from "./SearchInput";
import ProductsList from "./ProductsList";

const ProductsScreen = (props) => {
    return (
        <View style={{
            width: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: '#eef1f6',
            borderBottomWidth: 2,
        }}>
            <SearchInput />

            <ProductsList navigation={props.navigation} />
        </View>
    );
}

export default ProductsScreen;