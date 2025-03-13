import { floodReadingFetched } from "@/types/floodData";
import { createContext, ReactNode, useContext, useState } from "react";

interface IFloodreadingsContext {
    floodReadings: floodReadingFetched[]|null;
    setFloodReadings?: React.Dispatch<React.SetStateAction<floodReadingFetched[]|null>>;
};

const FloodReadingsContext = createContext<null|IFloodreadingsContext>(null);

export function FloodReadingContextProvider({ children }: { children: ReactNode }) {
    const [floodReadings, setFloodReadings] = useState<null | floodReadingFetched[]>(null)

    return (
        <FloodReadingsContext.Provider
            value={{
                floodReadings,
                setFloodReadings
            }}
        >
            {children}
        </FloodReadingsContext.Provider>
    )
}


function useFloodReadings() {
    const context = useContext(FloodReadingsContext)
    if (!context) {
        console.error("No flood readings context")
    }

    return context
}

export default useFloodReadings
