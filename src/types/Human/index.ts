export type Human = {
    id: string,
    fullName: string,
    city: string,
    image: string,
    thumb: string,
    registered: Date,
    networkRequests: Human[],
    network: Human[]
    declinedRequest: Human[],
}
