import axios from "axios";

const journalApi = axios.create({
  baseURL: 'https://vue-demos-a744a-default-rtdb.firebaseio.com',
})

export default journalApi
