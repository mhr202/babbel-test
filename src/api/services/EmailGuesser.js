import { apiService } from '../../config/axios';

export const searchEmail = (params) => apiService.get('/api/generate', { params });
