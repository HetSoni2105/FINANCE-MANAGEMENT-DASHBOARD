// client/src/services/authService.js
const BASE = 'http://localhost:4000/auth';

const request = async (path, options = {}) => {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
};

export const authService = {

  register: (data) =>
    request('/register', { method: 'POST', body: JSON.stringify(data) }),

  login: (data) =>
    request('/login', { method: 'POST', body: JSON.stringify(data) }),

  // verify token is still valid + fetch fresh user data
  getMe: (token) =>
    request('/me', { headers: { Authorization: `Bearer ${token}` } }),

  logout: async () => {},

  // ── token storage ──────────────────────────────────────
  persistSession: ({ token, user }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  },

  getToken: () => localStorage.getItem('token'),

  getStoredUser: () => {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  },

  clearSession: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};