import axios from "axios";

const API_URL = "http://localhost:5000";

export const shortenUrl = async (longUrl) => {
  try {
    const response = await axios.post(`${API_URL}/shorten`, { longUrl });
    return response.data.shortURL;
  } catch (error) {
    console.error("Error shortening the URL", error);
    throw error;
  }
};
