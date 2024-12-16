import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BottomNavigation({ currentScreen, setCurrentScreen }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.navItem,
          currentScreen === "Home" && styles.activeNavItem,
        ]}
        onPress={() => setCurrentScreen("Home")}
      >
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          currentScreen === "Search" && styles.activeNavItem,
        ]}
        onPress={() => setCurrentScreen("Search")}
      >
        <Text style={styles.navText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#282828",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeNavItem: {
    borderTopWidth: 2,
    borderTopColor: "#1DB954",
  },
  navText: {
    color: "white",
    fontSize: 12,
  },
});
