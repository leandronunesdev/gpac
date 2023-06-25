import axios from "axios";
import { useEffect, useState } from "react";

interface PlayListImage {
  url: string;
}

interface PlayList {
  name: string;
  images: PlayListImage[];
}

const PlayLists = () => {
  const [playLists, setPlayLists] = useState<PlayList[]>([]);

  const headers = {
    Authorization: `Bearer BQCTRQV5Lnk9_SceFVTLRDGG5_qEh-GZvxzMRMgZ8UP6n4o5CL5JGEcJ43UOKBIWmfPWoBirK0oa1Zjbs2UH7VBqUNNYXSEoDyyf8VCyiVpIxLIJ0wM`,
  };

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/users/spotify/playlists?limit=10", {
        headers: headers,
      })
      .then((response) => setPlayLists(response.data.items));
  }, []);

  return (
    <div className="flex">
      {playLists.map((playlist: PlayList) => {
        return (
          <div>
            <img
              src={playlist.images[0].url}
              alt=""
              className="grayscale"
              width={480}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PlayLists;
