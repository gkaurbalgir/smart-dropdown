
// Integrated with Mock API for getting countries.
// The max no. of items listed in the dropdown is configureable from the parent through constants file.
const constants = {
    countriesURL: 'https://restcountries.eu/rest/v2/all',
    numberOfMaxOptionsToBeShownAtOneTime: 5,
    role: {
        admin: 'admin',
        user: 'user'
    }
};
export default constants;