import { useState, useEffect } from "react";
import { View } from "react-native";
import SearchInput from "../components/SearchInput";
import ProductsList from "../components/ProductsList";
import { CONTAINER } from "../utils/styles";
import { API_URL, AUTHOR_ID } from "../utils/constants";

const ProductsScreen = (props) => {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(API_URL, {
            method: 'GET',
            headers: {
                'authorId': AUTHOR_ID,
            },
        })
            .then(response => response.json())
            .then(data => {
                setProducts(data)
            })
            .catch(error => {
                console.error('Error:', error)

            })
    }, [])
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
            <SearchInput search={search} setSearch={setSearch} />

            <ProductsList navigation={props.navigation} filter={search} products={products} />
        </View>
    );
}

export default ProductsScreen;