import { useEffect, useState } from 'react'
export function App () {
  const [fact, setFact] = useState()

  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => {
        setFact(data.fact)
        console.log(data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </div>
  )
}
