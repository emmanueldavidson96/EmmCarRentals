import { gql, request } from "graphql-request";

export const getCarsList = async () => {
    const query = gql`
        query MyQuery {
            carLists {
            carAvg
            createdAt
            id
            name
            seat
            price
            publishedAt
            updatedAt
            image {
                url
            }
            carType
            carBrand
            }
        }       
    `
    const result = await request("https://api-eu-west-2.hygraph.com/v2/clyda17u5072707utuftr9ynq/master", query)
    return result
}