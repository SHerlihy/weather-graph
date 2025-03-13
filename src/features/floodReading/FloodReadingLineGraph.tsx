import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import useFloodReadings from "@/hooks/useFloodReadings"

const chartConfig = {
    value: {
        label: "Value",
        color: "#119999",
    },
} satisfies ChartConfig

export function FloodReadingLineGraph({
    title,
    description,
}: {
    title: string,
    description: string,
}) {
    const floodReadingsContext = useFloodReadings()
    return (
        <div className="fixed h-[60vh] w-full">
            <div className="w-full h-full bg-current order-5">
                {!floodReadingsContext && <p>Flood records unavailable</p>}
                {!floodReadingsContext?.floodReadings && <p>Flood records unavailable</p>}
                {
                    floodReadingsContext?.floodReadings &&
                    <Card className="p-0">
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                                <LineChart
                                    accessibilityLayer
                                    data={floodReadingsContext.floodReadings}
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
                    </Card >
                }
            </div>
        </div>
    )
}

export default FloodReadingLineGraph
