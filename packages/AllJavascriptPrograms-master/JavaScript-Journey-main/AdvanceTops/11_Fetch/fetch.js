let gitHubUrl = 'https://api.github.com/users/Bhanuprathyush123'

fetch(gitHubUrl)
     .then((response) => {
     return response.json()
     })
     .then((collectedData) => {
          // collecting the data from the previous then since it returs a response
          // we get an error if we not do this / the out put is not consoled
          console.log(collectedData);
          // console.log(collectedData.id);
          // console.log(collectedData.bio);
          // console.log(collectedData.avatar_url);
     })
     .catch((error) => {
          console.log('Error :',error);
     })
     .finally(() => {
          console.log('Fect is either Completed of Reverted');
     })