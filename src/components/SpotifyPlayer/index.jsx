import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export default function AudioPlayer({ track, onPlay }) {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(track.audioSrc));
  const intervalRef = useRef();

  const { title, artist, color, image, audioSrc } = track;

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setIsPlaying(false);
        setTrackProgress(0);
        clearInterval(intervalRef.current);
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(value);
  };

  const onScrubEnd = () => {
    if (!isPlaying) setIsPlaying(true);
    startTimer();
  };

  // Dispara onPlay assim que começar a tocar
  useEffect(() => {
  if (isPlaying) {
    audioRef.current.currentTime = 2; // começa do segundo 2
    audioRef.current.play();
    startTimer();
    if (onPlay) onPlay();
  } else {
    audioRef.current.pause();
    clearInterval(intervalRef.current);
  }
}, [isPlaying, onPlay]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <S.PlayerWrapper activeColor={color} isPlaying={isPlaying}>
      <S.TrackInfo>
        <S.Artwork src={image} alt={`Capa da música ${title} - ${artist}`} />
        <S.Title>{title}</S.Title>
        <S.Artist>{artist}</S.Artist>
      </S.TrackInfo>

      <S.Controls>
        <S.Button
          aria-label={isPlaying ? "Pausar" : "Tocar"}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "❚❚" : "►"}
        </S.Button>
      </S.Controls>

      <S.Progress
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={audioRef.current.duration || 0}
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
      />

      <S.Time>
        {formatTime(trackProgress)} / {formatTime(audioRef.current.duration || 0)}
      </S.Time>
    </S.PlayerWrapper>
  );
}
