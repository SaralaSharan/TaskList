import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  Alert,
  Button,
  Modal,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native-web";
import { s } from "./App.style";
import uuid from "react-native-uuid";
import { Header } from "./components/Header/Header";
import { CardToDO } from "./components/CardToDo/CardToDo";
import { useEffect, useRef, useState } from "react";
import { TabBottomMenu } from "./components/TabBottomMenu/TabBottomMenu";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import { CustomDialog } from "./components/CustomDialog/CustomDialog";
import AsyncStorage from "@react-native-async-storage/async-storage";

let isFirstRender = true;
let isLoadUpdate = false;

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const [selectedTabName, setSelectedTabName] = useState("all");

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const scrollViewRef = useRef();

  useEffect(() => {
    loadTodoList();
  }, []);

  useEffect(() => {
    if (!isLoadUpdate) {
      if (!isFirstRender) {
        saveTodoList();
      }
    } else {
      isFirstRender = false;
    }
  }, [todoList]);

  function getFileteredList() {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => todo.isCompleted === false);
      case "done":
        return todoList.filter((todo) => todo.isCompleted === true);
    }
  }

  function deleteTodo(todoToDelete) {
    console.log("longpress");
    if (window.confirm("Are you sure you want to delete this todo?")) {
      console.log("Delete this todo", todoToDelete);
      setTodoList(todoList.filter((t) => t.id !== todoToDelete.id));
    }
  }

  function renderTodoList() {
    return getFileteredList().map((todo) => (
      <View key={todo.id} style={s.cardItem}>
        <CardToDO onLongPress={deleteTodo} onPress={updateTodo} todo={todo} />
      </View>
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };
    const updatedTodoList = [...todoList];
    const indextoUpdate = updatedTodoList.findIndex(
      (t) => t.id === updatedTodo.id
    );
    updatedTodoList[indextoUpdate] = updatedTodo;
    setTodoList(updatedTodoList);
  }

  function showAddtodoDialog() {
    setShowAddDialog(true);
  }

  function handleCancel() {
    setShowAddDialog(false);
  }

  async function loadTodoList() {
    try {
      const todoListString = await AsyncStorage.getItem("@todoList");
      isLoadUpdate = true;
      if (todoListString) {
        setTodoList(JSON.parse(todoListString));
      }
    } catch (err) {
      Alert.alert("Loading error", err.message);
    }
  }

  async function saveTodoList() {
    try {
      await AsyncStorage.setItem("@todoList", JSON.stringify(todoList));
    } catch (err) {
      Alert.alert("Saving error", err.message);
    }
  }

  function handleSave() {
    if (inputValue.trim()) {
      const newTodo = {
        id: uuid.v4(),
        title: inputValue,
        isCompleted: false,
      };
      setTodoList([...todoList, newTodo]);

      setInputValue("");
      setShowAddDialog(false);
      setTimeout(() => {
        scrollViewRef.current.scrollToEnd({ animated: false });
      }, 300);
    }
  }

  function handleCancel() {
    setInputValue("");
    setShowAddDialog(false);
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView ref={scrollViewRef}>{renderTodoList()}</ScrollView>
          </View>
          <ButtonAdd onPress={showAddtodoDialog} />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <TabBottomMenu
          todoList={todoList}
          onPress={setSelectedTabName}
          selectedTabName={selectedTabName}
        />
      </View>
      <View>
        {showAddDialog && (
          <CustomDialog
            visible={showAddDialog}
            onSave={handleSave}
            onCancel={handleCancel}
          >
            <Text>Choose a name for your todo</Text>
            <TextInput
              placeholder="Ex: Go to dentist"
              onChangeText={(text) => setInputValue(text)}
            />
          </CustomDialog>
        )}
      </View>
    </>
  );
}
