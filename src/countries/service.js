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
}

export default new CountriesService()