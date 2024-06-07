import React from 'react'
import { View, Text, Button } from 'react-native'

const MockProducts = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
    },
]

const ProductDetailScreen = () => {
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
            {MockProducts.map(product => (
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
                        />
                    </View>
                </View>
            ))}
        </View>
    )
}

export default ProductDetailScreen