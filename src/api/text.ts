import request from 'axios';


export const getText = async () => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};