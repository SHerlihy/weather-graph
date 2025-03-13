import FloodReadingLineGraph from "@/floodReading/FloodReadingLineGraph"

const nowDateTime = new Date(Date.now() - 10000).toISOString()

const chartDataSorted = [
    { xKey: new Date(Date.now() - 90000).toISOString(), value: 3 },
    { xKey: new Date(Date.now() - 80000).toISOString(), value: 3 },
    { xKey: new Date(Date.now() - 70000).toISOString(), value: 3 },
    { xKey: new Date(Date.now() - 10000).toISOString(), value: 3 },
    { xKey: nowDateTime, value: 10 },
]

const timeMatcher = /\d\d:\d\d/

export function App() {
    return (
        <>
            <FloodReadingLineGraph
                title="Flood Graph"
                description="Flood Graph for test data"
                dataSorted={chartDataSorted}
            />
        </>
    )
}

export default App
