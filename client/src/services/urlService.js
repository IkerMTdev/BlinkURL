import axios from "axios";

const API_URL = "http://localhost:5000";

export const shortenUrl = async (longUrl) => {
  try {
    const response = await axios.post(`${API_URL}/shorten`, { longUrl }); // * Hace una petición POST al servidor
    return response.data.shortURL; // * Devuelve la URL acortada
  } catch (error) {
    console.error("Error shortening the URL", error); // * Para mostrar el error en la consola
    throw error; // * Para detener la ejecución del programa en caso de error
  }
};
