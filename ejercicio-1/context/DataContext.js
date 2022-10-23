import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [movieData, setMovieData] = useState({
    category: "",
    data: {
      title: "",
      image: "",
      description: "",
      trailer: "",
    },
  });

  const [serieData, setSerieData] = useState({
    category: "",
    data: {
      title: "",
      image: "",
      description: "",
      seasons: "",
      trailer: "",
    },
  });

  return (
    <DataContext.Provider
      value={{ movieData, serieData, setMovieData, setSerieData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
