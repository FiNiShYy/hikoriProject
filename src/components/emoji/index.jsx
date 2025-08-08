import { useEffect, useState } from "react";
import * as S from "./styles";

export default function EmojiBackground() {
  const emojis = ['💗', '💚'];
  const total = 30;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < total; i++) {
      arr.push({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,              // posição vertical aleatória na viewport
        size: Math.random() * 1.5 + 1.5,
        duration: Math.random() * 7 + 5,
        delay: -Math.random() * 12,            // delay negativo pra animação já estar em andamento
      });
    }
    setItems(arr);
  }, []);

  return (
    <>
      {items.map(({ id, emoji, left, top, size, duration, delay }) => (
        <S.Emoji
          key={id}
          left={left}
          top={top}
          size={size}
          duration={duration}
          delay={delay}
        >
          {emoji}
        </S.Emoji>
      ))}
    </>
  );
}
