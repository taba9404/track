function callApi() {
  const res = fetch("https://jsonplaceholder.typicode.com/users");
  console.log(res)
};

callApi();