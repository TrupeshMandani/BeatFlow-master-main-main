import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import SongListPlayer from "../Components/SongListPlayer";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>BeatFlow</Text>
      </View>
      <SongListPlayer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    padding: 16,
    backgroundColor: "#282828",
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
