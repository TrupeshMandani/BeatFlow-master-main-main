import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const PlaylistItem = ({ name, tracks, imageUrl }) => (
  <TouchableOpacity style={styles.playlistItem}>
    <Image source={{ uri: imageUrl }} style={styles.playlistImage} />
    <View style={styles.playlistInfo}>
      <Text style={styles.playlistName}>{name}</Text>
      <Text style={styles.playlistTracks}>{tracks} tracks</Text>
    </View>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('Dev Mandora');
  const [bio, setBio] = useState('Music lover and playlist creator');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.settingsText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <Image 
          source={{ uri: 'https://picsum.photos/200' }} 
          style={styles.profileImage} 
        />
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.userStats}>{bio}</Text>
      </View>
      <View style={styles.actionButtons}>
        {isEditing ? (
          <View style={styles.editForm}>
            <TextInput
              style={styles.editInput}
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
              placeholderTextColor="#b3b3b3"
            />
            <TextInput
              style={[styles.editInput, styles.bioInput]}
              value={bio}
              onChangeText={setBio}
              placeholder="Bio"
              placeholderTextColor="#b3b3b3"
              multiline
            />
            <TouchableOpacity style={styles.button} onPress={() => setIsEditing(false)}>
              <Text style={styles.buttonText}>SAVE PROFILE</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => setIsEditing(true)}>
            <Text style={styles.buttonText}>EDIT PROFILE</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.playlistSection}>
        <Text style={styles.sectionTitle}>Your Playlists</Text>
        {[1, 2, 3, 4, 5].map((item) => (
          <PlaylistItem 
            key={item}
            name={`My Playlist ${item}`}
            tracks={Math.floor(Math.random() * 100) + 1}
            imageUrl={`https://picsum.photos/200?random=${item}`}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  settingsText: {
    color: 'white',
    fontSize: 16,
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  username: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  userStats: {
    color: '#b3b3b3',
    fontSize: 14,
    marginTop: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1DB954',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  editForm: {
    width: '100%',
    paddingHorizontal: 16,
  },
  editInput: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 8,
    color: '#000000',
    fontSize: 16,
    marginBottom: 8,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  playlistSection: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  playlistImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  playlistInfo: {
    marginLeft: 12,
  },
  playlistName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playlistTracks: {
    color: '#b3b3b3',
    fontSize: 14,
  },
});

