import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, ScrollView } from "react-native";

export default function InputComp(){
    const [myInput,setMyInput] = useState('');
    const [names,setNames] = useState(['John','James','Mark','Jane','Lisa','Mike','Miles','Millie','Mikel'])

    const onChangeInput = (event) => {
        setMyInput(event)
    }

    const onAddUser = () => {
        const newState = [...names,myInput];
        setNames(newState);
        setMyInput('');
    }

    return(
        <ScrollView>
            <View>
                <TextInput
                    value={myInput}
                    style={styles.input}
                    onChangeText={(e)=>onChangeInput(e)}
                    placeholder="Enter your name"
                />
            </View>
            <Button
                title="Add user"
                onPress={onAddUser}
            />
            <View style={{marginTop:10}}>
                { names.map((name,index)=>(
                    <Text key={index} style={styles.user}>
                        {name}
                    </Text>
                ))}
            </View>
        </ScrollView>
    )
}

const styles =  StyleSheet.create({
    input:{
        width:'100%',
        marginTop:20,
        backgroundColor:'#f2f2f2',
        padding:10,
        fontSize:20
    },
    user:{
        fontSize:40,
        borderWidth:1,
        borderColor:'#cecece',
        padding:10,
        marginBottom:20
    }
})