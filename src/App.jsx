import { useState, useEffect } from "react";
import Card from "./components/Card";
import ExpandedCard from "./components/ExpandedCard";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const [activeID, setActiveID] = useState(0);
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setDataArray(res);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AnimatePresence exitBeforeEnter="true">
      <div
        className={`flex flex-col w-full h-screen ${
          activeID === 0 ? "items-center" : ""
        } bg-mainBackground text-white`}
      >
        {activeID === 0 ? (
          <motion.div className={`flex flex-col gap-8 w-3/5 m-4`}>
            <motion.h1
              className={`text-5xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }}
            >
              Hello User!
            </motion.h1>
            <motion.h2
              className={`text-5xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2 }}
            >
              Explore
            </motion.h2>
          </motion.div>
        ) : (
          ""
        )}

        <motion.div
          className={`grid grid-container--fit w-3/5 h-full ${
            isLoading ? " content-center justify-items-center" : ""
          }`}
          key="initialZero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          {activeID === 0 && isLoading === false ? (
            dataArray.map(({ id, image, title }) => {
              return (
                <Card
                  key={id}
                  imageUrl={image}
                  onClick={() => setActiveID(id)}
                  title={title}
                />
              );
            })
          ) : activeID === 0 && isLoading === true ? (
            <Loader />
          ) : activeID !== 0 && isLoading === false ? (
            dataArray
              .filter(({ id }) => activeID === id)
              .map(
                ({
                  id,
                  image,
                  title,
                  director,
                  rt_score,
                  release_date,
                  running_time,
                  description,
                  movie_banner,
                  original_title_romanised,
                }) => {
                  return (
                    <ExpandedCard
                      key={id}
                      isSelected={activeID === id}
                      back={() => setActiveID(0)}
                      mobileUrl={image}
                      imageUrl={movie_banner}
                      synopsis={description}
                      rtScore={rt_score}
                      movieName={title}
                      director={director}
                      runTime={running_time}
                      releaseDate={release_date}
                      originalTitleRomanised={original_title_romanised}
                    />
                  );
                }
              )
          ) : (
            ""
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;
