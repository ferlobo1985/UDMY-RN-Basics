import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function InputComp(){
    const [myInput,setMyInput] = useState('')

    const onChangeInput = (event) => {
        setMyInput(event)
    }

    return(
        <View>
            <TextInput
                value={myInput}
                style={styles.input}
                onChangeText={(e)=>onChangeInput(e)}
            />
        </View>
    )
}

const styles =  StyleSheet.create({
    input:{
        width:'100%',
        marginTop:20,
        backgroundColor:'#f2f2f2',
        padding:10,
        fontSize:20
    }
})