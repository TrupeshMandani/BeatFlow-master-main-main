import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HomeScreen from "./pages/HomePage";
import SearchScreen from "./pages/SearchResults";
import ProfileScreen from "./pages/ProfilePage";
import BottomNavigation from "./Components/BottomNavigation";
import PlayerBar from "./Components/playbar";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Home");

  const renderScreen = () => {
    switch (currentScreen) {
      case "Home":
        return <HomeScreen />;
      case "Search":
        return <SearchScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <PlayerBar />
      <BottomNavigation
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
});
