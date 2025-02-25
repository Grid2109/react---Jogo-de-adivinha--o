import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { WORDS, Challenge } from "./utils/words";
import { useEffect, useState } from "react";
import { LettersUsed, LettersUsedProps } from "./components/LettersUsed";

export default function App() {
  const [letter, setLetter] = useState("");
  const [attemps, setAttemps] = useState(0);
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
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
  }, [])

  if(!challenge) {
    return 
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attemps} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programação mais utilizadas no mundo" />
        <div className={styles.word}>
          {
            challenge.word.split("").map(() => (
              <Letter value="" />
            ))
          }
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
        <Input autoFocus maxLength={1} placeholder="?"/>
        <Button title="Confirmar" />
        </div>

        <LettersUsed data={lettersUsed}/>

      </main>
    </div>
  );
}
