import { StyleSheet, Text, View, Pressable } from "react-native";

export default function PressComp(){
    return(
        <View>
            <Pressable
                onPress={()=> console.log('Pressed')}
                // android_ripple={{
                //     color:'red',
                //     radius:200
                // }}
                style={({pressed})=>[
                    pressed ? styles.pressed:styles.notPressed,
                    styles.pressable
                ]}
            >
                <Text style={{color:'#000'}}>
                    Add Number
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    pressable:{
        width:'100%',
        padding:10,
        alignItems:'center'
    },
    notPressed:{backgroundColor:'#454545'},
    pressed:{backgroundColor:'#8f8f8f'}
})