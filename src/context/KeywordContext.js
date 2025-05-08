import { createContext } from "react";

export const KeywordContext = createContext({
    keyword: "",
    setKeyword: () => {}
});