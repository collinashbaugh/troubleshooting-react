import gql from 'graphql-tag'


class CountriesService {
    allCountries = gql`
        query {
            allLocations (filter: {name_in: ["Chile", "Costa Rica"]}) {
                name 
                region
                id
            }
        }
    `

    createCountry = gql`
        mutation ($name: String!, $region: Region!, $rating: Int!) {
            createLocation (
            name: $name, 
            region: $region, 
            rating: $rating
            ) {
            name
            id
            region
            rating
            }
        }
    `

    updateCountry = gql`
        mutation ($name: String!, $region: Region!, $rating: Int!, $id: ID!) {
            updateLocation(
            name: $name,
            region: $region,
            rating: $rating,
            id: $id
            ) {
            name
            id
            rating
            region
            }
        }
    `
}

export default new CountriesService()