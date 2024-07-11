import { s } from "./Header.style";
import logoImg from "../../assets/logo.png";
import { Image, Text } from "react-native-web";

export function Header() {
  return (
    <>
      <Image style={s.img} source={logoImg} resizeMode="contain" />
      <Text style={s.subtitle}>You probably have something to do</Text>
    </>
  );
}
