import React, {useState, useEffect} from "react";

function App() {

    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch("/countrylist").then(
                res => res.json()
            ).then(
                data => {
                    setData(data)
                    console.log(data)
                }
            )
    },[])


    return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {data.map((country, index) => (
          <li key={index}>{country.country}</li>
        ))}
      </ul>
    </div>
  );
}
export default App