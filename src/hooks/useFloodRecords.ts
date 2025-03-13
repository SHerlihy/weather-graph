import { floodReadingFetched } from "@/types/floodData";
import { useState } from "react";

function useFloodRecords() {
    const [floodRecords, setFloodRecords] = useState<null | floodReadingFetched[]>()

    return {
        floodRecords,
        setFloodRecords
    }
}

export default useFloodRecords
