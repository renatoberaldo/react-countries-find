import Item from "./Item";

export default function Country({children: country =[]}){
  
  if(!country) {
    return <div>Impossible to render the country!!</div>
  }
  
  const demographicDensity = country.population/country.area;
  const {flag, name, capital, region, population, area} = country;

  return(
    <div className="border p-2 m-2 flex flex-row items-center space-x-2">
      {/* <img src={flag} alt={name} className="w-48" /> */}
      <ul>
        <li><Item label="Name:">{name}</Item></li>
        <li><Item label="Capital:">{capital}</Item></li>
        <li><Item label="Region:">{region}</Item></li>
        <li><Item label="Population:">{population}</Item></li>
        <li><Item label="Area:">{area}</Item></li>
        <li><Item label="Demographic Density:">{demographicDensity}</Item></li>
      </ul>
    </div>
  )
}