// context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from './AuthService';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const navigate = useNavigate();

  // on mount — verify token is still valid against the server
  useEffect(() => {
    const verify = async () => {
      const token = authService.getToken();
      if (!token) { setLoading(false); return; }

      try {
        const freshUser = await authService.getMe(token); // re-checks with server
        setUser(freshUser);
      } catch {
        authService.clearSession(); // token expired or invalid
      } finally {
        setLoading(false);
      }
    };
    verify();
  }, []);

  const register = async (data) => {
    setError(null);
    try {
      await authService.register(data);
      navigate('/login'); // go to login after registering
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const login = async (credentials) => {
    setError(null);
    try {
      const { token, user } = await authService.login(credentials);
      authService.persistSession({ token, user });
      setUser(user);
      navigate('/dashboard'); // ← navigation happens here
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const logout = async () => {
    await authService.logout();
    authService.clearSession();
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);