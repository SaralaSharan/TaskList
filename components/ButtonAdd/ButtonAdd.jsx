import { Text, TouchableOpacity } from "react-native-web";
import { s } from "./ButtonAdd.style";
export function ButtonAdd({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.btn}>
      <Text s={s.txt}>+ New todo</Text>
    </TouchableOpacity>
  );
}
