const Country =({name, capital, area, languages, flag})=>{
  return <>
    <h1>{name}</h1>
    <p>Capital: {capital}</p>
    <p>Area: {area}</p>
    <h2>Languages</h2>
    <ul>
      {Object.values(languages).map(language=><li key={language}>{language}</li>)}
    </ul>
    <img src={flag} alt="" />
    <h2>Weather in {name}</h2>
    
  </>
}
export default Country