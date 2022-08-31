let apiUrl
const apiUrls = {
//  production: 'https://kavitha-mern-blog-app.herokuapp.com/api',
  development: 'http://localhost:5000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
//   apiUrl = apiUrls.production
} else {
  apiUrl = apiUrls.production
}

export default apiUrl