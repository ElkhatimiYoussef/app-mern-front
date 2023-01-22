export const isAuthenticated = () => {

    const jwt = localStorage.getItem('jwt_info');

    if(jwt) {
 
      return JSON.parse(jwt)

    }

    return false

 }

export const emptyCart = (callback) => {
  
  localStorage.removeItem('cart');

  callback();

}