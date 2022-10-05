const loadcountries = () =>{//function loadcountries r kono parameter nai
    fetch('https://restcountries.com/v3.1/all')//data fetch korlam
    .then((res) => res.json())//je response asbe seta json e convert korlam
    .then((data) => displaycountries(data));//je data asbe displaycoumtries function call kore data pass korbe use korbo
};
//loadcountries function theke data paoyer jonno function
const displaycountries = (countries) =>{//displaycountries function er parameter countries and call korar somoy je data disi seta countries ba parameter  e asbe 
     //console.log(countries[0]);//country er nam dekhar jonno and inspect console e output dekhabe
     //250 dat er prottectake html e convert korbo
     const countrieshtml = countries.map((country) => getcountryhtml(country));//countries ke map kore counttries er prottecta data holo country  
     //console.log(countrieshtml);//countrieshtml akta array
     //console.log(countrieshtml[0]);
     const container = document.getElementById('show-country');
     container.innerHTML = countrieshtml.join(' ');//sob country ke disi r array er country gulake join korsi space diye
};
     //prottekta country er prottek data ke html e convert korlam 
     //country name er moddhe common take nibo
     const getcountryhtml = ({name,flags}) =>{
        return`
        
            <div class = "country">
               <h3>${name.common}</h3>
               <img src="${flags.png}">
            </div>
        `;
     };
loadcountries();//function call