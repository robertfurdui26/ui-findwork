import axios from 'axios';

const baseURL = 'https://localhost:8080/construction';

const api = axios.create({
  baseURL,
});



const getConstruction = async (getConstructionDto) => {
    try {
      const response = await api.get('/construction/getAllCons',{
        params:getConstructionDto,
      });
      if (response.status === 200) {
        console.log('All Construction here', response.data);
        return response.data;
      } else {
        console.error('Error at API');
        throw new Error('Error');
      }
    } catch (error) {
      console.error('Error API', error);
      throw error;
    }
  };
  
  export { getConstruction };