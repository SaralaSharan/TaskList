import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 15,
  },
  header: {
    flex: 0.35,
  },
  body: {
    flex: 5,
  },
  footer: {
    backgroundColor: "white",
    height: 70,
  },
  cardItem: {
    paddingBottom: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
  },
});
