export const isAuth = () => {
    const token = localStorage.getItem('token');
    
    if (!!token) {
        return false;
    }


    try {

        const parts = token.split('.');   // Basic Check of the Structure of the Token Before Actual Shits
        if (parts.length != 3) {
            return false;
        }


        const payload = JSON.parse(atob(parts[1]));
        const isExpired = payload.exp * 1000 < Date.now();
        
        return !isExpired;
    }

    catch (error) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        return false;
    }

};