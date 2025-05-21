import { useEffect, useState } from 'react'
import '../style.css'
export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const threeFirstWord = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=40&json=true`)
          .then(response => response.json())
          .then(data => {
            const { url } = data
            setImageUrl(url)
          })
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="" />}
    </div>
  )
}
