import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AppContext } from '../App'

const MockProducts = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
    },
]

const ProductDetailScreen = (props) => {
    const { product } = useContext(AppContext)

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
            {product && (
                <View key={product.id} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: "100%",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderColor: '#dee3ed',
                    borderWidth: 1,
                    padding: 10,
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>{product.name}</Text>

                </View>
            )}
        </View>
    )
}

export default ProductDetailScreen