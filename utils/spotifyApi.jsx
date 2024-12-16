import { authorize } from "react-native-app-auth";
import { encode as base64encode } from "base-64";

const spotifyAuthConfig = {
  clientId: "70cc52e38369405886658b8bb579644a",
  clientSecret: "d4b95fbd4d504b9091fe0c0f0dd7c43b",
  redirectUrl: "http://localhost:8082",
  scopes: [
    "user-read-private",
    "user-read-email",
    "user-read-recently-played",
    "playlist-read-private",
  ],
  serviceConfiguration: {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  },
};

let accessToken = null;

export async function getAccessToken() {
  if (accessToken) return accessToken;

  try {
    const result = await authorize(spotifyAuthConfig);
    accessToken = result.accessToken;
    return accessToken;
  } catch (error) {
    console.error("Failed to get access token", error);
    throw error;
  }
}

const BASE_URL = "https://api.spotify.com/v1";

async function fetchFromSpotify(endpoint, method = "GET", body = null) {
  const token = await getAccessToken();
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

export async function getUserPlaylists() {
  return await fetchFromSpotify("/me/playlists");
}

export async function getRecentlyPlayed() {
  return await fetchFromSpotify("/me/player/recently-played");
}

export async function getRecommendations(mood) {
  const seedGenres = convertMoodToGenres(mood);
  return await fetchFromSpotify(
    `/recommendations?seed_genres=${seedGenres.join(",")}`
  );
}

export async function searchTracks(query) {
  return await fetchFromSpotify(
    `/search?q=${encodeURIComponent(query)}&type=track`
  );
}

export async function getTrack(trackId) {
  return await fetchFromSpotify(`/tracks/${trackId}`);
}

export async function getPlaylist(playlistId) {
  return await fetchFromSpotify(`/playlists/${playlistId}`);
}

function convertMoodToGenres(mood) {
  const moodGenreMap = {
    happy: ["pop", "dance"],
    sad: ["blues", "acoustic"],
    energetic: ["rock", "electronic"],
    relaxed: ["ambient", "classical"],
  };

  return moodGenreMap[mood.toLowerCase()] || ["pop"];
}
