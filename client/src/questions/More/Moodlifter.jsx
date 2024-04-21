import React, { useEffect, useState } from "react";
// import './App.css';
import axios from "axios";

function App() {
  const CLIENT_ID = "84c710f9d66f4fc0952f8fd3e74c4006";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  useEffect(() => {
    const initializePlayer = () => {
      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new window.Spotify.Player({
          name: "My Spotify Player",
          getOAuthToken: (cb) => {
            cb(token);
          },
        });

        player.addListener("player_state_changed", (state) => {
          console.log("Current track: ", state.track_window.current_track);
        });

        player.connect();
      };
    };

    if (token) {
      initializePlayer();
    }
  }, [token]);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchTracks = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchKey,
          type: "track", // Update to search for tracks
        },
      });

      setTracks(data.tracks.items);
    } catch (error) {
      console.error("Error searching tracks:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}

        {token ? (
          <form onSubmit={searchTracks}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type={"submit"}>Search</button>
          </form>
        ) : (
          <h2>Please login</h2>
        )}

        <div>
          {tracks.map((track) => (
            <div key={track.id}>
              <img src={track.album.images[0].url} alt={track.name} />
              <div>{track.name}</div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
