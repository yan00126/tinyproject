import { createContext, useState, useContext, Children } from "react";

const AppContext = createContext();

export const AppProvider = ({ Children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <AppContext.Provider>{Children}</AppContext.Provider>;
};
