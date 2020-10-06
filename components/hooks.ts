import { useEffect, useState } from "react";
import { fetcher } from "../utils/fetcher";

const useLogin = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const [isLoginCorrect, setIsLoginCorrect] = useState(false);
    const [shouldLogin, setShouldLogin] = useState(false);

    const setUserField = (key: string, value: string) => {
        setUser({ ...user, [key]: value });
    }

    const handleLoginClick = () => {
        setShouldLogin(!shouldLogin);
    }

    useEffect(() => {
        if (!(user.username && user.password))
            return;
        const login = async () => {
            const userLogin = await fetcher('auth/login', {
                method: 'POST',
                body: user,
            }, false)
            if (userLogin.response?.statusCode == 401) {
                return setIsLoginCorrect(false);
            }
            setIsLoginCorrect(true);
            document.cookie = `access_token=${userLogin.access_token}`;
        }
        login()
    }, [shouldLogin])

    return {
        user,
        setUserField,
        handleLoginClick,
        isLoginCorrect,
    }
}

export default useLogin;