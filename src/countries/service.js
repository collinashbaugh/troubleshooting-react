import gql from 'graphql-tag'


class CountriesService {
    allCountries = gql`
        query {
            allLocations {
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

    deleteCountry = gql`
    mutation ($id: ID!) {
        deleteLocation(
          id: $id 
        ) {
          name
          id
        }
      }
    `
}

export default new CountriesService()