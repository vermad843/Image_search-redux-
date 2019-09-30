const API_URL = "https://api.500px.com/v1/photos/search?term=flowers";

export default {
    search(searchTerm) {
        const url = `${API_URL}&term=${searchTerm}`;
        return fetch(url)
          .then((response) => {
              return response.json()
          }).then((result) => {
            return result.photos;
          });
    }
 }