import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function PlayerBar() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://picsum.photos/50' }} 
        style={styles.albumArt} 
      />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle} numberOfLines={1}>Current Song Title</Text>
        <Text style={styles.artistName} numberOfLines={1}>Artist Name</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.playButtonText}>▶</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#282828',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  albumArt: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  songInfo: {
    flex: 1,
    marginLeft: 12,
  },
  songTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  artistName: {
    color: '#b3b3b3',
    fontSize: 12,
  },
  playButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    color: 'black',
    fontSize: 18,
  },
});

