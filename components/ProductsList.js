import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { API_URL, AUTHOR_ID } from '../utils/constants'
import { AppContext } from '../App'


const ProductsList = ({ navigation, products, filter }) => {
    const [filteredProducts, setFilteredProducts] = useState([])
    const { setProduct } = useContext(AppContext)
    const navigateToProductDetail = (product) => {
        // Navigate to ProductDetailScreen passing the productId
        if (navigation) {
            setProduct(product)
            const productId = product.id
            navigation.navigate('ProductDetails', { productId })
        }
    }

    useEffect(() => {
        setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase())))
    }, [filter, products])

    return (
        <View
            style={{
                marginTop: 40,
                width: "100%",
                display: 'grid',
                gridGap: 0,
                justifyContent: 'center',
                alignItems: 'center',

            }}
        >
            {filteredProducts.map(product => (
                <View key={product.id} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: "100%",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderColor: '#dee3ed',
                    borderWidth: 1,
                    padding: 10,
                }}>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: 52,
                        }}
                    >
                        <Text
                            style={{
                                color: '#2c2c30',
                                fontWeight: 'bold',
                                fontSize: 16,
                            }}
                        >{product.name}</Text>
                        <Text>{product.id}</Text>
                    </View>
                    <View>
                        <Button
                            title=">"
                            onPress={() => { navigateToProductDetail(product) }}
                        />
                    </View>
                </View>
            ))}
        </View>
    )
}

export default ProductsList