import { useState } from "react";
import { Button, Text, Modal, View } from "react-native";

export default function ModalComponent(){
    const [modal,setModal] = useState(false);
    
    const handleModal = () => {
        setModal(!modal)
    }

    return(
        <>
            <Modal 
                visible={modal}
                animationType='slide'
                onShow={()=> console.log('showing')}
            >
                <View style={{marginTop:50}}>
                    <Text>MY modal content</Text>
                </View>
                <Button
                    title="Close modal"
                    onPress={handleModal}
                />
            </Modal>
            <Button
                title="Open modal"
                onPress={handleModal}
            />
        </>
    )
}