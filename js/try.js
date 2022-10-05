const loadcountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displaycountries(data));
}

const displaycountries = countries =>{
     
     
     const countrieshtml = countries.map(country => getcountryhtml(country));
    
     
     const container = document.getElementById('countries');
     container.innerHTML = countrieshtml.join(' ');
}
     //original
     //const getcountryhtml = country =>{
        //return`
        
            //<div class = "country">
               //<h3>${country.name.common}</h3>
               //<img src="${country.flags.png}">
            //</div>
        //`
     //}

     //destruchturing option - 1
     //const getcountryhtml = country =>{
       // const{name,flags}=country;
        //return`
        
           // <div class = "country">
              // <h3>${name.common}</h3>
               //<img src="${flags.png}">
            //</div>
       // `
     //}

     //parameter er moddhe destruchturing option - 2
     const getcountryhtml = ({name,flags,area,region})=>{
        return`
        
            <div class = "country">
               <h3>${name.common}</h3>
               <p>Area:${area}</p>
               <p>continet:${region}</p>
               <img src="${flags.png}">
            </div>
        `
     }
loadcountries();