async function callApi() {
  //const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //const res = await fetch("https://hokkaidoshimbun.sharepoint.com/teams/taba/Lists/TEST01/AllItems.aspx");  
  const res = await fetch("https://hokkaidoshimbun.sharepoint.com/teams/taba/_api/web/lists/getbytitle(TEST01)");
  const users = await res.json();
  console.log(users)
};

callApi();
