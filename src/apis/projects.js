import axios from 'axios';

export default axios.create({
  baseURL: 'https://paigebachmanapi.herokuapp.com/v1alpha1/graphql'
});
