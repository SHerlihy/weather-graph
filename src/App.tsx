import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

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

function FloodRecordTable() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Time</TableHead>
                    <TableHead>Value</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {chartDataSorted.map(({ xKey, value }) => (
                    <TableRow>
                        <TableCell className="font-medium">{xKey}</TableCell>
                        <TableCell>{value}</TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>

    )
}

export function App() {
    return (
        <>
            <FloodRecordTable />
            <FloodReadingLineGraph
                title="Flood Graph"
                description="Flood Graph for test data"
                dataSorted={chartDataSorted}
            />
        </>
    )
}

export default App
