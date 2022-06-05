export const getTweets = async (ids) => {
  var myHeaders = new Headers();

  myHeaders.append(
    "Authorization",
    "Bearer AAAAAAAAAAAAAAAAAAAAAOOIdAEAAAAAX1glYT8gJk%2FhCgNKS0rioot%2F140%3DIDGbmPq2jjz9F1d55HlzpgztNDrx1cd6YXiTLV8b2wgcO8J65q"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
    mode: "no-cors",
  };

  fetch("https://api.twitter.com/2/tweets/1375809527690317825", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
