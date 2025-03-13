import { createContext, useContext } from "react"
import { StationsList } from "./features/stations/StationsList";
import FloodReadingTable from "./features/floodReading/FloodReadingTable";
import FloodReadingLineGraph from "./features/floodReading/FloodReadingLineGraph";

const nowDateTime = new Date(Date.now() - 10000).toISOString()

const chartDataSorted = [
    { time: new Date(Date.now() - 90000).toISOString(), value: 3 },
    { time: new Date(Date.now() - 80000).toISOString(), value: 3 },
    { time: new Date(Date.now() - 70000).toISOString(), value: 3 },
    { time: new Date(Date.now() - 10000).toISOString(), value: 3 },
    { time: nowDateTime, value: 10 },
]

const timeMatcher = /\d\d:\d\d/


export const FloodRecordsContext = createContext(null);

export function App() {
    const floodRecords = useContext(FloodRecordsContext)

    return (
        <>
            <StationsList />
            <section>
                <FloodReadingTable
                    title="Flood Table"
                    dataSorted={chartDataSorted}
                />
                <FloodReadingLineGraph
                    title="Flood Graph"
                    description="Flood Graph for test data"
                    dataSorted={chartDataSorted}
                />
            </section>
        </>
    )
}

export default App
