import FloodReadingLineGraph from "@/floodReading/FloodReadingLineGraph"
import FloodReadingTable from "@/floodReading/FloodReadingTable"
import { useEffect, useState } from "react"
import { catchError, handleGET } from "./lib/async"

const nowDateTime = new Date(Date.now() - 10000).toISOString()

const chartDataSorted = [
    { time: new Date(Date.now() - 90000).toISOString(), value: 3 },
    { time: new Date(Date.now() - 80000).toISOString(), value: 3 },
    { time: new Date(Date.now() - 70000).toISOString(), value: 3 },
    { time: new Date(Date.now() - 10000).toISOString(), value: 3 },
    { time: nowDateTime, value: 10 },
]

const timeMatcher = /\d\d:\d\d/

const ROOT_URI = "https://environment.data.gov.uk/flood-monitoring"
const STATIONS_ROUTE = "/id/stations"

export function App() {
    const [stationsData, setStationsData] = useState([{ notion: "", label: "" }])
    useEffect(() => {
        (async function() {
            const [error, resJson] = await handleGET(ROOT_URI + STATIONS_ROUTE)

            if (error !== undefined) {
                return
            }

            const stationData = resJson.items.map((item) => {
                return {
                    notation: item.notation,
                    label: item.label
                }
            })

            console.log(stationData)
            setStationsData(stationData)
        })()
    }, [])
    return (
        <>
            {stationsData.map((stationData) => <p>{stationData.label}</p>)}
            <FloodReadingTable
                title="Flood Table"
                dataSorted={chartDataSorted}
            />
            <FloodReadingLineGraph
                title="Flood Graph"
                description="Flood Graph for test data"
                dataSorted={chartDataSorted}
            />
        </>
    )
}

export default App
