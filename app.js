import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://random-word-api.p.rapidapi.com/french_word',
  headers: {
    'X-RapidAPI-Key': '020cbed300mshdb4460cd5143c4cp19b2abjsnc804192c8862',
    'X-RapidAPI-Host': 'random-word-api.p.rapidapi.com'
  }
};

export default async function frenchRandomizer(){
  try {
    const response = await axios.request(options);
    return(response.data.word);
  } catch (error) {
    return(error);
  }
}