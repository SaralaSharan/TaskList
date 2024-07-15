import { Button, Modal, View } from "react-native-web";
import { s } from "./CustomDialog.style";

export const CustomDialog = ({ visible, onSave, onCancel, children }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onCancel}
  >
    <View style={s.centeredView}>
      <View style={s.modalView}>
        {children}
        <View style={s.buttonRow}>
          <Button title="Cancel" onPress={onCancel} />
          <Button title="Save" onPress={onSave} color="red" />
        </View>
      </View>
    </View>
  </Modal>
);
