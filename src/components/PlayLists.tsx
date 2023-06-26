import { useEffect, useRef, useState } from "react";
import axios from "axios";
import qs from "qs";

interface PlayListImage {
  url: string;
}

interface PlayList {
  name: string;
  images: PlayListImage[];
  href: string;
}

interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
  expiration_time: number;
}

const Playlists = () => {
  const [playLists, setPlayLists] = useState<PlayList[]>([]);

  const accessToken = localStorage.getItem("access-token");

  const getPlaylists = (token: Token) => {
    const headers = {
      Authorization: `Bearer ${token.access_token}`,
    };

    axios
      .get("https://api.spotify.com/v1/users/spotify/playlists?limit=10", {
        headers: headers,
      })
      .then((response) => setPlayLists(response.data.items));
  };

  useEffect(() => {
    const parsedToken = accessToken && JSON.parse(accessToken);

    const params = {
      grant_type: "client_credentials",
      client_id: "34db8d746e7040d2ab3395232cf75fd6",
      client_secret: "e11a3a527ab142ac864a33148d7b6f0b",
    };

    const tokenHeaders = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const isTokenExpired = () => {
      const currentTime = Math.floor(Date.now() / 1000);
      return currentTime >= parsedToken.expiration_time;
    };

    if (!parsedToken || isTokenExpired()) {
      axios
        .post(`https://accounts.spotify.com/api/token`, qs.stringify(params), {
          headers: tokenHeaders,
        })
        .then((response) => {
          const updatedToken = {
            ...response.data,
            expiration_time:
              Math.floor(Date.now() / 1000) + response.data.expires_in,
          };
          localStorage.setItem("access-token", JSON.stringify(updatedToken));
          getPlaylists(updatedToken);
        })
        .catch((error) => console.error(error));
    } else {
      playLists.length === 0 && getPlaylists(parsedToken);
    }
  }, [accessToken, playLists]);

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      (carousel.current as HTMLElement).offsetWidth * currentIndex <=
        maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: any) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        (carousel.current as HTMLElement).offsetWidth * currentIndex >=
        maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      (carousel.current as HTMLElement).scrollLeft =
        (carousel.current as HTMLElement).offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? (carousel.current as HTMLElement).scrollWidth -
        (carousel.current as HTMLElement).offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel mx-auto grayscale" id="playlists">
      {playLists.length > 0 && (
        <div className="relative overflow-hidden">
          <div className="flex justify-between absolute top left w-full h-full">
            <button
              onClick={movePrev}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("prev")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("next")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div
            ref={carousel}
            className="carousel-container relative flex overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            {playLists.map((playlist, index) => {
              return (
                <div
                  key={index}
                  className="carousel-item text-center relative w-64 h-64 snap-start"
                >
                  <a
                    href={playlist.href}
                    className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                    style={{
                      backgroundImage: `url(${playlist.images[0].url})`,
                    }}
                  >
                    <img
                      src={playlist.images[0].url}
                      alt={playlist.name}
                      className="w-full aspect-square hidden"
                    />
                  </a>
                  <a
                    href={playlist.href}
                    className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                  >
                    <h3 className="text-white py-6 px-3 mx-auto text-xl">
                      {playlist.name}
                    </h3>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlists;
