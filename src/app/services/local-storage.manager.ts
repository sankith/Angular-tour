export function setToken(token: any) {
    localStorage.setItem('token',token) 
}

export function getToken(){
return localStorage.getItem('token')
}