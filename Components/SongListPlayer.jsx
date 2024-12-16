import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
} from "react-native";
import { songs } from "../data/songs";

export default function SongListPlayer() {
  const openYouTube = async (youtubeUrl) => {
    const supported = await Linking.canOpenURL(youtubeUrl);
    if (supported) {
      await Linking.openURL(youtubeUrl);
    } else {
      console.error("Don't know how to open URI: " + youtubeUrl);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.songItem}
      onPress={() => openYouTube(item.youtubeUrl)}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.songImage} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </View>
      <Text style={styles.songDuration}>{item.duration}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  songItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#282828",
  },
  songImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 4,
  },
  songInfo: {
    flex: 1,
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
  songDuration: {
    color: "#b3b3b3",
    fontSize: 14,
  },
});
