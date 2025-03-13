import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { floodReadingFetched } from "./types/floodData"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"

const nowDateTime = new Date(Date.now() - 10000).toISOString()

const chartDataSorted: floodReadingFetched[] = [
    { dateTime: new Date(Date.now() - 90000).toISOString(), value: 3 },
    { dateTime: new Date(Date.now() - 80000).toISOString(), value: 3 },
    { dateTime: new Date(Date.now() - 70000).toISOString(), value: 3 },
    { dateTime: new Date(Date.now() - 10000).toISOString(), value: 3 },
    { dateTime: nowDateTime, value: 10 },
]

const timeMatcher = /\d\d:\d\d/

const chartConfig = {
    value: {
        label: "Value",
        color: "#119999",
    },
} satisfies ChartConfig

export function App() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Line Chart - Linear</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <LineChart
                        accessibilityLayer
                        data={chartDataSorted}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="dateTime"
                            tickLine={true}
                            axisLine={true}
                            tickMargin={12}
                            tickFormatter={(value) => timeMatcher.exec(value)![0]}
                        />
                        <Line
                            dataKey="value"
                            type="linear"
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}


export default App
