import React from "react";
import { DataContext, DataContextProvider } from "./context/DataContext";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <DataContextProvider>
      <Navigation />
    </DataContextProvider>
  );
}
