const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => displayData(data));
  };
  
  const displayData = (countries) => {
    const countryData = countries.map((country) => countryNameShow(country));
  
    const nameDiv = document.getElementById("show-country");
    nameDiv.innerHTML = countryData.join(" ");
  };
  
  const countryNameShow = ({ name, flags }) => {
    return `
          <div class="country">
              <h3> ${name.common}  </h3>
              <img src = '${flags.png}'>
  
          </div>
      
      `;
  };
  loadCountries();