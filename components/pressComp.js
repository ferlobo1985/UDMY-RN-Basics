import { StyleSheet, Text, View } from "react-native";

export default function PressComp(){
    return(
        <View style={styles.generate}>
            <Text style={{color:'#fff'}}>
                Add Number
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    generate:{
        backgroundColor:'#00BCD4',
        padding:10,
        alignItems:'center'
    }
})