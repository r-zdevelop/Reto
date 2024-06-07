import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { CONTAINER, FORM_STYLE } from "../utils/styles";
import { useState } from "react";
import { API_URL, AUTHOR_ID } from "../utils/constants";
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

const ProductCreateScreen = ({ navigation }) => {
    const [product, setProduct] = useState({})
    const [dateRelease, setDateDateRelease] = useState(dayjs());
    const [dateRevsion, setDateDateRevsion] = useState(dayjs());

    const onChangeText = (field, text) => {
        setProduct({ ...product, [field]: text })
    }

    const validateProduct = () => {
        return product.id && product.name && product.description && product.logo && dateRelease && dateRevsion
    }
    return (
        <View style={{
            width: "100%",
            height: CONTAINER.bodyHeight,
            display: 'flex',
            padding: 20,
            alignItems: 'center',
            borderBottomColor: '#eef1f6',
            borderBottomWidth: 2,
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',

            }}>Formulario de Registro</Text>

            <ScrollView style={{
                display: FORM_STYLE.display,
                width: FORM_STYLE.width,
                flexDirection: FORM_STYLE.flexDirection,
            }}>
                <View
                    style={{
                        display: 'flex',
                        width: "100%",
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <Text style={{
                        width: "100%",
                        textAlign: 'left',
                    }}>ID</Text>
                    <TextInput
                        style={{
                            width: "100%",
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            marginTop: 10,
                        }}
                        onChangeText={text => onChangeText('id', text)}
                        value={product.id}
                    />
                </View>
                <View
                    style={{
                        display: 'flex',
                        width: "100%",
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <Text style={{
                        width: "100%",
                        textAlign: 'left',
                    }}>Nombre</Text>
                    <TextInput
                        style={{
                            width: "100%",
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            marginTop: 10,
                        }}
                        onChangeText={text => onChangeText('name', text)}
                        value={product.name}
                    />
                </View>
                <View
                    style={{
                        display: 'flex',
                        width: "100%",
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <Text style={{
                        width: "100%",
                        textAlign: 'left',
                    }}>Description</Text>
                    <TextInput
                        style={{
                            width: "100%",
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            marginTop: 10,
                        }}
                        onChangeText={text => onChangeText('description', text)}
                        value={product.description}
                    />
                </View>
                <View
                    style={{
                        display: 'flex',
                        width: "100%",
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <Text style={{
                        width: "100%",
                        textAlign: 'left',
                    }}>Logo</Text>
                    <TextInput
                        style={{
                            width: "100%",
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            marginTop: 10,
                        }}
                        onChangeText={text => onChangeText('logo', text)}
                        value={product.logo}
                    />
                </View>
                <View
                    style={{
                        display: 'flex',
                        width: "100%",
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <Text style={{
                        width: "100%",
                        textAlign: 'left',
                    }}>Fecha liberaci&oacute;n</Text>
                    <DateTimePicker
                        mode="single"
                        date={dateRelease}
                        onChange={(params) => setDateDateRelease(params.date)}
                    />
                </View>
                <View
                    style={{
                        display: 'flex',
                        width: "100%",
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <Text style={{
                        width: "100%",
                        textAlign: 'left',
                    }}>Fecha revisi&oacute;n</Text>
                    <DateTimePicker
                        mode="single"
                        date={dateRevsion}

                        onChange={(params) => setDateDateRevsion(params.date)}
                    />
                </View>
            </ScrollView>
            <Button
                title="Enviar"
                onPress={() => {
                    if (validateProduct()) {
                        fetch(API_URL, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'authorId': AUTHOR_ID,
                            },
                            body: JSON.stringify(
                                {
                                    ...product,
                                    date_release: dateRelease,
                                    date_revision: dateRevsion,
                                }
                            )
                        })
                            .then(response => response.json())
                            .then(data => {
                                console.log('Success:', data);
                                navigation.navigate('Products')
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                    }
                }}
            />
        </View >
    );
}

export default ProductCreateScreen;