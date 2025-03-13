import { StationsList } from "./features/stations/StationsList";
import FloodReadingTable from "./features/floodReading/FloodReadingTable";
import FloodReadingLineGraph from "./features/floodReading/FloodReadingLineGraph";

export function App() {
    return (
        <>
            <div className="h-[60vh] bg-current">
                    <FloodReadingLineGraph
                        title="Flood Graph"
                        description="Flood Graph for test data"
                    />
            </div>
            <div className="w-full m-4 grid grid-cols-2 grid-rows-1 gap-4 order-none">
                <StationsList/>
                <FloodReadingTable
                    title="Flood Table"
                />
            </div>
        </>
    )
}

export default App
