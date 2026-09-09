export const API_BASE_URL = 'https://backend-odrp2.ondigitalocean.app/api';
// export const API_BASE_URL = 'http://localhost:8080/api';

export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  defaultOptions: {
    mode: 'cors' as const,
    credentials: 'omit' as const,
  },
} as const;
