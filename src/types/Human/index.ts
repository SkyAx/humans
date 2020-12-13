export type Human = {
    id: string,
    fullName: string,
    city: string,
    image: string,
    registered: Date,
    friends: Human[],
}
