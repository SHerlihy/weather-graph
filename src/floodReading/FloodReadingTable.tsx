import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { FloodReadingDisplayData } from "@/types/floodData"


function FloodReadingTable({
    title,
    dataSorted
}: {
    title: string,
    dataSorted: FloodReadingDisplayData[]
}) {
    return (
        <Table>
            <TableCaption>{title}</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Time</TableHead>
                    <TableHead>Value</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {dataSorted.map(({ time, value }) => (
                    <TableRow>
                        <TableCell className="font-medium">{time}</TableCell>
                        <TableCell>{value}</TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>

    )
}

export default FloodReadingTable
