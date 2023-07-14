export default {
    getToken: () => localStorage.getItem('token'),
    setToken: (str: any) => localStorage.setItem('token' , str),
    removeToken: () => localStorage.removeItem('token')
}