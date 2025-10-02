import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import imgLogo from "./assets/to-do-list.png";
import btnAdd from "./assets/add-file.png";
import { useState } from "react";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <Image source={imgLogo} style={styles.logo} />
        <Text>todo list</Text>
      </View>
      <View>
        <TextInput
          placeholder="Add Tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />
        <Image source={btnAdd} style={styles.botaoAdd} />
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 128,
    height: 128,
  },
  botaoAdd: {
    width: 32,
    height: 32,
  }
});
