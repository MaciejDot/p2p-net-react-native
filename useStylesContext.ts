import { useContext } from "react";
import forceNonNullable from "./utils/forceNonNullable";
import StylesContext from "./styles/StylesContext";

export default function useStylesContext(){
    return forceNonNullable(useContext(StylesContext))
}