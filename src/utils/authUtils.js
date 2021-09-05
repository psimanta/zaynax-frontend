import jwt_decode from 'jwt-decode';

export const authenticate = (token, cb) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(token));
        cb();
    }
}

export const authenticateUser = (token, cb) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt-user', JSON.stringify(token));
        cb();
    }
}

export const isAuthenticated = () => {
    if (typeof window === 'undefined') return false;
    if (localStorage.getItem('jwt')) {
        const { exp } = jwt_decode(JSON.parse(localStorage.getItem('jwt')));
        if ((new Date()).getTime() <= exp * 1000) {
            return true;
        } else {
            localStorage.removeItem('jwt');
            return false;
        }
    } else return false;
}

export const isUserAuthenticated = () => {
    if (typeof window === 'undefined') return false;
    if (localStorage.getItem('jwt-user')) {
        const { exp } = jwt_decode(JSON.parse(localStorage.getItem('jwt-user')));
        if ((new Date()).getTime() <= exp * 1000) {
            return true;
        } else {
            localStorage.removeItem('jwt-user');
            return false;
        }
    } else return false;
}


export const singout = cb => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        cb();
    }
}

export const userInfo = () => {
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    if (!jwt) return false;
    const decoded = jwt_decode(jwt);
    return { ...decoded, token: jwt }
}