import styles from "./App.module.css";
import { Header } from "./components/Header";

export default function App() {
function handleRestartGame(){
  alert('Reiniciar o jogo')
}

  return (
    <div className={styles.container}>
      <main>
      <Header current={5} max={10} onRestart={handleRestartGame}/>
      </main>
    </div>
  );
}


