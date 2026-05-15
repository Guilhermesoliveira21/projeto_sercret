import { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import { Hero } from "./components/pages/home/hero";
import { ContainerHome } from "./styles/ContainerHome";
import { Title } from "./components/Title";
import { CardLove } from "./components/CardLove";
import { CardHistorys } from "./components/CardHistorys";
import { historys } from "@/mocks/historys.tsx";
import { Carta } from "./components/Carta";
import { Music } from "./components/Music";
import { musicMock } from "./mocks/musica.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { quiz } from "./mocks/quiz";

function App() {
  const [dropDoww, setDroDoww] = useState("");

  return (
    <>
      <Header />
      <Hero />
      <ContainerHome>
        <Title title="Qual parte da nossa história você quer sentir hoje?" />
        <br />
        <section>
          <CardLove
            onClick={() =>
              setDroDoww(dropDoww === "historia" ? "" : "historia")
            }
            title="Nossa História"
            image="/images/historia.jpg"
          />

          <AnimatePresence>
            {dropDoww === "historia" && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <div className="container_historys">
                  {historys?.map((item) => (
                    <CardHistorys
                      image={item.image}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <CardLove
            onClick={() =>
              setDroDoww(dropDoww === "playlist" ? "" : "playlist")
            }
            title="Playlist que lembra vc"
            image={"/images/playlist.jpg"}
          />

          <AnimatePresence>
            {dropDoww === "playlist" && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <div className="container_music">
                  {musicMock?.map((item) => (
                    <Music
                      title={item.title}
                      music={item.music}
                      img={item.img}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <CardLove
            onClick={() => setDroDoww(dropDoww === "beijo" ? "" : "beijo")}
            title="Valendo um Beijo"
            image={"/images/beijoo.png"}
          />

          <AnimatePresence>
            {dropDoww === "beijo" && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <div className="beijo">
                  {quiz.map((item) => (
                    <div className="container">
                      <p className="id">{item.id}</p>
                      <p className="text">{item.quiz}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <CardLove
            onClick={() => setDroDoww(dropDoww === "carta" ? "" : "carta")}
            title="Cartinha final"
            image={"/images/cartinha.jpg"}
          />

          <AnimatePresence>
            {dropDoww === "carta" && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <Carta />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </ContainerHome>
    </>
  );
}

export default App;
