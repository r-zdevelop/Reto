import React from "react";
import { View } from "react-native";
import SearchInput from "./SearchInput";
import ProductsList from "./ProductsList";
import { CONTAINER } from "../utils/styles";

const ProductsScreen = (props) => {
    return (
        <View style={{
            width: "100%",
            height: CONTAINER.bodyHeight,
            display: 'flex',
            padding: 20,
            justifyContent: 'space-between',
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