export const isAuth = () => {
    const user = localStorage.getItem('user');
    
    return !!user;

};