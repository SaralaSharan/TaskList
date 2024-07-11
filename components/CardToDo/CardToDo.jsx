import { Image, Text, TouchableOpacity } from "react-native-web";
import { s } from "./CardToDo.style";
import checkLogo from "../../assets/check.png";

export function CardToDO({ todo }) {
  return (
    <TouchableOpacity style={s.card}>
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
