import { createContext, useContext, useState } from "react";

export const FlairContext = createContext({});

export const useFlair = () => useContext(FlairContext);

export const FlairProvider = ({ children }) => {

    const [flairState, setFlairState] = useState({
        flair: '',
        // 'string' is the selected flair which is a filter in the form of a text string provded by subreddit data.
        chooseFlair: (string) => {
            setFlairState((prevState) => {
                return {
                    ...prevState,
                    flair: string
                };
            });
        },
        resetFlair: (string) => {
            setFlairState((prevState) => {
                return {
                    ...prevState,
                    flair: ''
                };
            });
        }
    });

    return (
        <FlairContext.Provider value={flairState}>{children}</FlairContext.Provider>
    )
};

export default FlairContext;
