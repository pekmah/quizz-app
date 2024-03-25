import axios from 'axios';

import {API_TOKEN} from '@env';

const API_URL = 'https://quizapi.io/api/v1';

const AxiosUtility = axios.create({
  baseURL: `${API_URL}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apiKey: API_TOKEN,
  },
});

export default AxiosUtility;
