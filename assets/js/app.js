const selectElem = document.querySelector('.seleted');
function makeNewOptionBox(data)
{
    const title = data.title;
    if(typeof title != "undefined")
    {
        const optionBox =  document.createElement("option");
        optionBox.innerHTML = title;
        selectElem.appendChild(optionBox);
    }
}
function manipulateData(data)
{
    // var india;
    // india = data.countryitems[72].total_active_cases;
    // const leData = data.countryitems[0];
    //    function f.target.value == leData.India;
    //  const indiatotalCases = leData.total_cases;

    // console.log(leData);
    // console.log(indiatotalCases);
    // console.log(data.countryitems[0]); 
    for(eachItem in data.countryitems[0])
    {
        // console.log(eachItem);
        const singleData = data.countryitems[0][eachItem];
        makeNewOptionBox(singleData);
        // console.log(singleData);
        selectElem.addEventListener("change", function (e) {
            if(e.target.value == singleData.title){
                // console.log(singleData);
                const totalCases = singleData.total_cases;
                const totalRecovered = singleData.total_recovered;
                const totalUnresolved = singleData.total_unresolved;
                const totalDeaths = singleData.total_deaths;
                const totalNew_cases_today = singleData.total_new_cases_today;
                const totalNew_deaths_today = singleData.total_new_deaths_today;
                const totalActive_Cases = singleData.total_active_cases;
                const totalSerious_cases = singleData.total_serious_cases;
                console.log(totalCases);

                document.getElementById("t1").innerHTML = totalCases;
                document.getElementById("t2").innerHTML = totalActive_Cases;
                document.getElementById("t3").innerHTML = totalNew_cases_today;
                document.getElementById("t4").innerHTML = totalRecovered;
                document.getElementById("t5").innerHTML = totalUnresolved;
                document.getElementById("t6").innerHTML = totalDeaths;
                document.getElementById("t7").innerHTML = totalNew_deaths_today;
                document.getElementById("t8").innerHTML = totalSerious_cases;
                console.log(totalRecovered);
                console.log(totalNew_deaths_today);
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    options: {
        tooltips: {enabled: false},
        onhover: {mode: null},
      },
    type: 'bar',
    data: {
        labels: ['total Cases', 'Recovered', 'Unresolved', 'Deaths', 'cases today', 'deaths today', 'totalActive_Cases', 'totalSerious_cases'],
        datasets: [{
            label: 'Covid Counter',
            data: [totalCases, totalRecovered, totalUnresolved, totalDeaths, totalNew_cases_today, totalNew_deaths_today, totalActive_Cases, totalSerious_cases],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 4
        }]
    },
});

                // let cardTemplate = '<div class=row>dffgdfgdfg<script>wrapper.innerHTML= totalCases</script>\
                // </div>';

                // const wrapper=document.querySelector(".wrapper");
                // wrapper.innerHTML= cardTemplate;

            }
        });
    }
}
const fetchedData = fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')

.then((response) => {
    return response.json();
})

.then((data) =>
    {
       manipulateData(data); 
    });
