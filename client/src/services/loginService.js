import axios from "axios";

const userLogin = async (email,password) => {
  const response = await axios.post(`/api/login`,{
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
export { userLogin };
