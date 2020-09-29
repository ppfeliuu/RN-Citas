import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Citas from "./components/citas";

const App = () => {
  const [citas, setCitas] = useState([
    { id: "1", paciente: "Hook", propietario: "Juan", sintomas: "No Come" },
    { id: "2", paciente: "Redux", propietario: "Pedro", sintomas: "No rie" },
    { id: "3", paciente: "Native", propietario: "Pablo", sintomas: "No canta" },
  ]);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <FlatList
        data={citas}
        renderItem={({ item }) => <Citas item={item} />}
        keyExtractor={(cita) => cita.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#AA076B",
    flex: 1,
  },
  titulo: {
    color: "#FFF",
    marginTop: 40,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
