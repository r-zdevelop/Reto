import React from "react";
import { TextInput, View } from "react-native";

const SearchInput = ({ search, setSearch }) => {
    return (
        <View style={{
            width: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: '#eef1f6',
            borderBottomWidth: 2,
        }}>
            <TextInput
                style={{
                    width: "100%",
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 10,
                }}
                placeholder="Search..."
                value={search}
                onChangeText={setSearch}
            />
        </View>
    );
}

export default SearchInput;