// services/api.js
import { authService } from "../service/AuthService";

export const apiRequest = async (path, options = {}) => {
  const token = authService.getToken();

  const res = await fetch(`http://localhost:4000${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (res.status === 401) {
    authService.clearSession();
    window.location.href = "/login"; // force re-login on token expiry
    return;
  }
  const data = await res.json()

   if (!res.ok) throw new Error(data.error || 'Request failed');

  return data
};
