import useAxios from '../services/useAxios'

function HookAxios() {
  const {data, loading, error, refresh} = useAxios('https://v2.jokeapi.dev/joke/Any')

  if(loading) {return <h1>Loading...</h1>}
  if(error) {return (console.log(error))}

  return (
    <>
      <h1>{data?.setup} : {data?.delivery}</h1>
      <button onClick={refresh}>Refresh</button>
    </>
  )
}

export default HookAxios
