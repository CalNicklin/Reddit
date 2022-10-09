import { createContext, useContext, useState } from "react";

export const FlairContext = createContext({});

export const useFlair = () => useContext(FlairContext);

export const FlairProvider = ({ children }) => {

    const [flairState, setFlairState] = useState({
        flair: '',
        chooseFlair: (string) => {
            setFlairState((prevState) => {
                return {
                    ...prevState,
                    flair: string
                };
            });
        }
    });

    return (
        <FlairContext.Provider value={flairState}>{children}</FlairContext.Provider>
    )
};

export default FlairContext;
