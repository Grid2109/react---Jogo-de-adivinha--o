import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed } from "./components/LettersUsed";
import { WORDS, Challenge } from "./utils/words";
import { useEffect, useState } from "react";

export default function App() {
  const [attemps, setAttemps] = useState(0);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [letter, setLetter] = useState("");
  function handleRestartGame() {
    alert("Reiniciar o jogo");
  }

  function startGame() {
   const index = Math.floor(Math.random() * WORDS.length);
   const randomWord = WORDS[index];
   setChallenge(randomWord);

   setAttemps(0);
   setLetter("");
  }

  useEffect(() => {
    startGame();
  })

  return (
    <div className={styles.container}>
      <main>
        <Header current={attemps} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programação mais utilizadas no mundo" />
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
        <Input autoFocus maxLength={1} placeholder="?"/>
        <Button title="Confirmar" />
        </div>

        <LettersUsed />

      </main>
    </div>
  );
}
