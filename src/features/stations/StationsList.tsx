import useFloodReadings from "@/hooks/useFloodReadings"
import { handleGET } from "@/lib/async"
import { stationDataFetched } from "@/types/floodData"
import { ROOT_URI, STATIONS_ROUTE } from "@/vars"
import { useEffect, useState } from "react"

export function StationsList() {
    const [stationsData, setStationsData] = useState<null | stationDataFetched[]>(null)

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

            setStationsData(stationData)
        })()
    }, [])

    return (
        <section className="w-full h-[70vh] overflow-scroll">
            {stationsData === null && <p>Loading...</p>}
            {stationsData !== null && stationsData.map((stationData) => <StationItem stationId={stationData.notation} label={stationData.label} />)}
        </section>
    )
}

async function getFloodReadings(stationId: string) {
    const [error, resJson] = await handleGET(`https://environment.data.gov.uk/flood-monitoring/id/stations/${stationId}/readings?_sorted&_limit=100`)

    if (error !== undefined) {
        return []
    }

    const floodReadingsData = resJson.items.map((item) => {
        return {
            dateTime: item.dateTime,
            value: item.value
        }
    })

    return floodReadingsData
}

function StationItem({ label, stationId }: { label: string, stationId: string }) {
    const floodReadingsContext = useFloodReadings()

    const handleStationClick = async (stationId: string) => {
        const floodReadings = await getFloodReadings(stationId)
        if (!!floodReadingsContext?.setFloodReadings) {
            floodReadingsContext.setFloodReadings(floodReadings)
        }
    }

    return (
        <>
            <p>{label}</p>
            <button onClick={() => handleStationClick(stationId)}>Get Records</button>
        </>
    )
}
