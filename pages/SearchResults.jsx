import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { songs } from "../data/songs";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  // Function to open YouTube links
  const openYouTube = async (youtubeUrl) => {
    const supported = await Linking.canOpenURL(youtubeUrl);
    if (supported) {
      await Linking.openURL(youtubeUrl);
    } else {
      console.error("Don't know how to open URI: " + youtubeUrl);
    }
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== "") {
      // Update search history
      setSearchHistory([searchQuery, ...searchHistory.slice(0, 4)]);

      // Filter songs
      const results = songs.filter(
        (song) =>
          song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log("Search Query:", searchQuery);
      console.log("Filtered Results:", results);

      setFilteredSongs(results); // Set filtered results
    }
  };

  const renderSongItem = ({ item }) => (
    <TouchableOpacity
      style={styles.songItem}
      onPress={() => openYouTube(item.youtubeUrl)}
    >
      <Text style={styles.songTitle}>{item.title}</Text>
      <Text style={styles.songArtist}>{item.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Search</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Artists, songs, or podcasts"
          placeholderTextColor="#b3b3b3"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearchSubmit}
        />
      </View>
      <View style={styles.searchHistoryContainer}>
        <Text style={styles.searchHistoryTitle}>Recent Searches</Text>
        {searchHistory.map((item, index) => (
          <TouchableOpacity key={index} style={styles.searchHistoryItem}>
            <Text style={styles.searchHistoryText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.resultsText}>Search Results</Text>
      <FlatList
        data={filteredSongs}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.resultsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    padding: 16,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  searchContainer: {
    margin: 16,
  },
  searchInput: {
    backgroundColor: "#ffffff",
    borderRadius: 4,
    padding: 8,
    color: "#000000",
    fontSize: 16,
  },
  searchHistoryContainer: {
    padding: 16,
  },
  searchHistoryTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  searchHistoryItem: {
    paddingVertical: 8,
  },
  searchHistoryText: {
    color: "#b3b3b3",
    fontSize: 16,
  },
  resultsText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 16,
  },
  resultsContainer: {
    paddingHorizontal: 16,
  },
  songItem: {
    backgroundColor: "#1F1F1F",
    padding: 16,
    borderRadius: 4,
    marginBottom: 8,
  },
  songTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  songArtist: {
    color: "#b3b3b3",
    fontSize: 14,
  },
});

export default SearchScreen;
