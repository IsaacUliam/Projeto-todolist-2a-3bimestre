import { StatusBar } from "expo-status-bar";
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View,} from "react-native";
import imgLogo from "./assets/to-do-list.png";
import btnAdd from "./assets/add-file.png";
import { useState } from "react";
import { FlashList } from "@shopify/flash-list";
import lixeira from "./assets/lixeira.png"

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const handleAdd = () => {
    setTarefas([tarefa, ...tarefas]);
    setTarefa("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.viewItem}>
      <Text>{item}</Text>
      <Image style={styles.lixeira} source={lixeira} alt="Botão Deletar" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Todo List</Text>
        <Image source={imgLogo} style={styles.logo} />
      </View>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Adicionar Tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity onPress={handleAdd}>
          <Image source={btnAdd} style={styles.botaoAdd} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTarefas}>
        <FlashList data={tarefas} renderItem={renderItem} />
      </View>
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
    padding: 10,
  },

  logo: {
    width: 128,
    height: 128,
    margin: 20,
  },

  lixeira: {
    width: 32,
    height: 32,
  },

  botaoAdd: {
    width: 32,
    height: 32,
    marginTop: 4,
  },

  viewInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    padding: 5,
    borderWidth: 2,
    borderRadius: 15,
  },

  title: {
    textAlign: "center",
    marginBottom: 160,
    marginTop: 40,
    fontSize: 36,
  },

  viewTarefas: {
    width: "100%",
    flex: 1,
  },

  viewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});
