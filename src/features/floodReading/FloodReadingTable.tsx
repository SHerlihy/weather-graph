import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import useFloodReadings from "@/hooks/useFloodReadings"

function FloodReadingTable({
    title,
}: {
    title: string,
}) {
    const floodReadingsContext = useFloodReadings()
    return (
        <>
            {!floodReadingsContext && <p>Flood records unavailable</p>}
            {!floodReadingsContext?.floodReadings && <p>Flood records unavailable</p>}
            {
                floodReadingsContext?.floodReadings &&
                <Table>
                    <TableCaption>{title}</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Time</TableHead>
                            <TableHead>Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {floodReadingsContext.floodReadings.map(({ dateTime, value }) => (
                            <TableRow>
                                <TableCell className="font-medium">{dateTime}</TableCell>
                                <TableCell>{value}</TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            }
        </>

    )
}

export default FloodReadingTable
