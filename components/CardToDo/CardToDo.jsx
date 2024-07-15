import { Image, Text, TouchableOpacity } from "react-native-web";
import { s } from "./CardToDo.style";
import checkLogo from "../../assets/check.png";

export function CardToDO({ todo, onPress, onLongPress }) {
  return (
    <TouchableOpacity
      onLongPress={() => onLongPress(todo)}
      style={s.card}
      onPress={() => onPress(todo)}
    >
      <Text
        style={[
          s.title,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && <Image source={checkLogo} style={s.img} />}
    </TouchableOpacity>
  );
}
