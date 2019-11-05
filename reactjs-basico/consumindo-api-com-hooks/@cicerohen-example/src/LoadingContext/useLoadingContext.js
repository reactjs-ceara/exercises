import { useContext } from "react";
import LoadingContext from "./LoadingContext";

const useLoadingContext = () => useContext(LoadingContext);

export default useLoadingContext;
