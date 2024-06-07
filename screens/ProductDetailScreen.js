import React, { useContext } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { AppContext } from '../App'
import { CARD_LOGO } from '../utils/constants'

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
                <View
                    style={{
                        display: 'grid',
                        width: "100%",
                        padding: 40,
                    }}
                >
                    <View
                        style={{
                            display: 'flex',
                            width: "100%",
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={{
                        }}>Nombre</Text>
                        <Text style={{
                            fontWeight: 'bold',
                        }}>{product.name}</Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            width: "100%",
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={{
                        }}>Descripcion</Text>
                        <Text style={{
                            fontWeight: 'bold',
                        }}>{product.description}</Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            width: "100%",
                            height: 100,
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={{
                        }}>Logo</Text>

                    </View>
                    <View
                        style={{
                            display: 'flex',
                            width: "100%",
                            height: 100,
                            marginTop: -60,
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            style={{
                                width: '100%',
                            }}
                            resizeMode='center'
                            source={{
                                uri: CARD_LOGO,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            width: "100%",
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={{
                        }}>Fecha liberaci&oacute;n</Text>
                        <Text style={{
                            fontWeight: 'bold',
                        }}>{product.date_release}</Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            width: "100%",
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={{
                        }}>Fecha revisi&oacute;n</Text>
                        <Text style={{
                            fontWeight: 'bold',
                        }}>{product.date_revision}</Text>
                    </View>
                </View>
            )}

        </View>
    )
}

export default ProductDetailScreen