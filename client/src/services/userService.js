// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const registerUser = async (firstName,lastName,email,password) => {
  const response = await axios.post(`/api/register`,{
    firstName,
    lastName,
    email,
    password,

  })
  .then((response) =>{
    console.log(response);
    return "success"; 
  })
  .catch(function (error) {
    console.log(error);
  });

  return response;
}

// All of the endpoints in this file can be exported below
export { registerUser };
