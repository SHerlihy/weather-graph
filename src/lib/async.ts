export async function catchError<T>(promise: Promise<T>): Promise<[undefined, T] | [Error]> {
    return promise
        .then(data => {
            return [undefined, data] as [undefined, T]
        })
        .catch(error => {
            return [error]
        })
}

export async function handleGET(uri: string): Promise<[undefined, any] | [Error]> {
    const [error, response] = await catchError(fetch(uri))

    if (error !== undefined) {
        console.error(error.message)
        return [error]
    }
    
    return [error, await response.json()]
}
