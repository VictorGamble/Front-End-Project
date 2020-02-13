//variables
const nflApi = `https://feeds.nfl.com/feeds-rs/teams.json`
//functions
const getTeams = () => {
    
    get(nflApi).then(response => {
        // console.log(response)
        renderTeamsNames(response)
        
    })
 
}
const renderTeamsNames = data => {
    const teamsList = data.teams;
    const listOfNames = teamsList.map(team => team.fullName);

    console.log(listOfNames);

}

const getStadiumNames = () =>{
    get(nflApi).then(response => {
        renderStadiumNames(response);
    })
}


const renderStadiumNames = data => {
    const teamsList = data.teams;
    const listOfStadiumNames = teamsList.map(team => team.stadiumName);

    console.log(listOfStadiumNames);
}

const getCities = () =>{
    get(nflApi).then(response => {
        renderTeamsCities(response)
    })
}

const renderTeamsCities = data => {
    const cityNames = data.teams;
    const listOfCities = cityNames.map(city => city.cityState)
    console.log(listOfCities)
}

getTeams();
getStadiumNames();
getCities();