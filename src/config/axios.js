import axios from 'axios';

import { config } from './configs';

export const apiService = axios.create({
  baseURL: `${config.serverUrl}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
