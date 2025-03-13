export type floodReadingFetched = {
    dateTime: string;
    // Note that in JSON output NaN is illegal for a number so in JSON any NaN readings will omit the rt:value.
    value: number;
}

export type stationDataFetched = {
    //notation is the uid
    notation: string;
    label: string;
}

export type FloodReadingDisplayData = {
    time: string,
    value: number
}
