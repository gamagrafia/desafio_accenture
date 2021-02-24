export const isAuthenticated = (): boolean => {
    const TokenStorage = localStorage.getItem('@tokenApp')
    if (TokenStorage){
        return true
    } else {
        return false
    }

};

export const isTempPassAuthenticated = (): boolean => {
    const TokenStorage = localStorage.getItem('@tempPass')
    if (TokenStorage){
        return true
    } else {
        return false
    }

};


