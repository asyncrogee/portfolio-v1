import React, { useEffect, useState } from "react";

const LastFmRecentTrack = () => {
  const [track, setTrack] = useState(null);
  const username = "jrogeet";
  const apiKey = "f5fc77ab11b4b2603931afcc4fcb28b2";

  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`
    )
      .then((res) => res.json())
      .then((data) => { 
        if (data.recenttracks?.track?.length > 0) {
          setTrack(data.recenttracks.track[0]);
        }
      })
      .catch((error) => console.error("Error fetching Last.fm data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center p-2 rounded-xl gap-1 bg-offwhite drop-shadow-sm">
      {track ? (
        <div className="flex flex-col gap-1 w-full">
          <h3 className="text-xs">Spotify Recently Played</h3>
          <div className="flex gap-2">
            <img className="h-14 rounded" src={track.image[2]["#text"]} alt={track.name} />
            <div className="flex flex-col justify-evenly">
              <p className="text-sm">
                <strong>{track.name}</strong>
              </p>
              <p className="text-grei text-sm">{track.artist["#text"]}</p>
              <a className="text-grei text-xs" href={track.url} target="_blank" rel="noopener noreferrer">
                Listen on Last.fm
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p className="sm">Loading recent track...</p>
      )}
    </div>
  );
};

export default LastFmRecentTrack;
