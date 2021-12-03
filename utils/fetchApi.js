import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key':'bac32abad0msh0fae8dde4b99be1p15c8e9jsn82ce37467b18',
    },
  });
    
  return data;
}