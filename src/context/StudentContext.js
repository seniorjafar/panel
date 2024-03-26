import {createContext} from "react";

const useContext = createContext();

const useProvider = useContext.Provider;
const useConsumer = useContext.Consumer;

export {useContext, useProvider, useConsumer};
