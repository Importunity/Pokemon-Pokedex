import axios from 'axios';

export const loadCards = async () =>{
   try{
       const {data} = await axios.get('https://api.pokemontcg.io/v1/cards');
       return data;
   }catch(error){
       console.log(error.message);
   }
}

export const loadSearchCards = async (name) => {
    try{
        const {data} = await axios.get(`https://api.pokemontcg.io/v1/cards?name=${name}`);
        return data;
    }catch(error){
        console.log(error.message);
    }
}