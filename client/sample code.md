// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";

function App() {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);

  const renderProfile = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
          ${user.last_name}`}
        </h3>
        <p>{user.location}</p>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderProfile(profile))
        ) : (
          <p>No profiles found</p>
        )}
      </ul>
    </div>
  );
}


--- login


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleInputChange(event) {
    event.preventDefault();
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await signInUser(username, password);

    if (typeof result === "string") {
      alert(result);
    } else {
      console.log(result);
      console.log(result.username + " is logged in.");
      props.setUserToken(true);
      props.setUserDetails(result);
      navigate("/Dashboard");
    }
  }

----login

  const signInUser = async (username, password) => {
  const response = await axios
    .post(`/login/`, {
      username: username,
      password: password,
    })
    .then((response) => {
      const user = response.data.user;
      return user;
    })
    .catch((error) => {
      const err = JSON.stringify(error.response.data.message);
      return err;
    });

  return response;
};