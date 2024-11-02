import { api } from '@/apis/api';
import { atom, useAtom } from 'jotai';

// Atoms
export const statusAtom = atom<string>('loading');
export const tokenAtom = atom<string>('');
export const userAtom = atom<any>({});
export const loggedAtom = atom<boolean>(false);

// Store
export const useAuthStore = () => {
    const [status, setStatus] = useAtom(statusAtom);
    const [token, setToken] = useAtom(tokenAtom);
    const [user, setUser] = useAtom(userAtom);
    const [logged, setLogged] = useAtom(loggedAtom);

    const authTokenKey = "auth_token";
    const authLoggedKey = "auth_logged";

    const session = status;
    const isLogged = logged;
    const profile = user;

    const login = (token: string, data: object) => {
        localStorage.setItem(authTokenKey, token);
        localStorage.setItem(authLoggedKey, String(true));

        setToken(token);
        setUser(data);
        setLogged(true);

        setTimeout(() => {}, 90000);
        
        setStatus("authenticated");
    };

    const logout = () => {
        setStatus("unauthenticated");

        localStorage.removeItem(authTokenKey);
        localStorage.removeItem(authLoggedKey);

        setUser({});
        setLogged(false);
    };

    const loginViaSession = async () => {
        setStatus("loading");

        const token = localStorage.getItem(authTokenKey);

        if (token) {
            const response = await api.get('auth/me', { headers: { "Authorization": `Bearer ${token}` } })
                .then((response) => response.data)
                .catch(() => { logout() });

            if (response?.success) { login(token, response.data.user) }
        }else{
            logout();
        };
    };

    return {
        session,
        login,
        logout,
        isLogged,
        profile,
        token,
        loginViaSession,
    };
};
