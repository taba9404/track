async function callApi() {
  //const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //const res = await fetch("https://hokkaidoshimbun.sharepoint.com/teams/taba/Lists/TEST01/AllItems.aspx");  
  const res = await fetch("https://hokkaidoshimbun.sharepoint.com/:l:/t/taba/FJh0GYj4T3JBnV8IsTdGKI0Biqxd_69ARUFC86OkCAr3Xw?email=taba9404%40gmail.com&e=a3eDxj/_api/web/");

  const users = await res.json();
  console.log(users)
};

callApi();
