import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  img: {
    width: 25,
    height: 25,
  },
  card: {
    marginTop: 20,
    backgroundColor: "white",
    height: 115,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 13,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
  },
});
