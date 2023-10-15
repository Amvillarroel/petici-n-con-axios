import { useEffect, useState } from "react";
import axios from 'axios';

function useAxios (url) {

const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

async function asyncAxios (){
//mostrar que la página se está cargando
setLoading(true);
//Realizar petición a la url
await axios.get(url)
//Capturar la respuesta en response y setearla en data
.then(response => {
setData(response.data)
})
//en caso de error ejecutar bloque catch
.catch(err =>{
 setError(err)   
})
//Ejecutar después de resolver la promesa para quitar el loading
.finally(()=>{
 setLoading(false);   
})
}

useEffect(()=>{
asyncAxios();
}, []);

const refresh = () => {
    asyncAxios();
}

return {data, loading, error, refresh}

}

export default useAxios