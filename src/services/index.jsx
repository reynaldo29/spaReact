import axios from "axios";

export const userAuthenticate = async (username,password) =>{
    try{
        const response = await axios.post("https://localhost:7018/security/createToken",{username,password});
        if(response.status===200){
            console.log("inicio exitoso",response.data)
            return response
        }else{
            console.log("Error de autentificacion");
        }
    }catch(error){
        console.log(error);
    }
}

export const getPeople = async(token) =>{
    try {
        const response = await axios.get('https://localhost:7018/People/Get',{
            headers: {
                Authorization: token, // Adjuntar el token en los encabezados
              },
        });
    
        if (response.status === 200) {
            console.log(response)
            return response
          
        } else {
          console.error('Error al obtener la lista de personas:', response.statusText);
          return []; // Devuelve una lista vacía en caso de error
        }
      } catch (error) {
        console.error('Error al obtener la lista de personas:', error);
        return []; // Devuelve una lista vacía en caso de error
      }
}