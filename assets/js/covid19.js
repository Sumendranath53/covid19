
function india(data)
{
    const totalCases = data.countryitems[0][72].total_cases;
    const totalRecovered = data.countryitems[0][72].total_recovered;
    const totalUnresolved = data.countryitems[0][72].total_unresolved;
    const totalDeaths = data.countryitems[0][72].total_deaths;
    const totalNew_cases_today = data.countryitems[0][72].total_new_cases_today;
    const totalNew_deaths_today = data.countryitems[0][72].total_new_deaths_today;
    const totalActive_Cases = data.countryitems[0][72].total_active_cases;
    const totalSerious_cases = data.countryitems[0][72].total_serious_cases;

    // console.log(IndiatotalRecov);
    console.log(data);
    console.log(totalNew_deaths_today);
    document.getElementById("totalrecoverd").innerHTML = totalRecovered;
    document.getElementById("totalunrecoverd").innerHTML = totalUnresolved;
    document.getElementById("totalcases").innerHTML = totalCases;
    document.getElementById("totaldeaths").innerHTML = totalDeaths;
    document.getElementById("totalnew_cases_today").innerHTML = totalNew_cases_today;
    document.getElementById("totalnew_deaths_today").innerHTML = totalNew_deaths_today;
    document.getElementById("totalactive_Cases").innerHTML = totalActive_Cases;
    document.getElementById("totalserious_cases").innerHTML = totalSerious_cases;
    
    // TRe.innerText =  totalCases;

}
const fetchedData = fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')

.then((response) => {
    return response.json();
})

.then((data) =>
    {
       india(data);
    });
