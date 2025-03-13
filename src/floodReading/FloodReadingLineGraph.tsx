import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FloodReadingDisplayData } from "@/types/floodData"

const chartConfig = {
    value: {
        label: "Value",
        color: "#119999",
    },
} satisfies ChartConfig

export function FloodReadingLineGraph({
    title,
    description,
    dataSorted
}: {
    title: string,
    description: string,
    dataSorted: FloodReadingDisplayData[]
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <LineChart
                        accessibilityLayer
                        data={dataSorted}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="time"
                            tickLine={true}
                            axisLine={true}
                            tickMargin={12}
                        />
                        <YAxis
                            type="number"
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

export default FloodReadingLineGraph
