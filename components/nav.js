import { StyleSheet, Text, View } from "react-native";

export default function Nav({nameOfApp}){
    return(
        <View style={styles.nav}>
            <Text>
                {nameOfApp}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nav:{
        backgroundColor:'red',
        alignItems:'center',
        paddingTop:50,
        paddingBottom:20,
        width:'100%'
    }
})