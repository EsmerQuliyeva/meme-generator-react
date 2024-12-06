import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import Meme from "./Components/Meme";

function App() {
  // const [formData, setFormData] = React.useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   comments: "",
  //   isFriendly: true,
  //   employment: "",
  //   favColor: "",
  // });
  // // const style = {
  // //   backgroundColor: (square.id)%2===0 ? "green" : "red",
  // // };
  // console.log(formData);

  // function handleChange(event) {
  //   setFormData((prevFormData) => {
  //     const { name, value, checked, type } = event.target;
  //     return {
  //       ...prevFormData,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // }
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(formData);
  // }


  return (
    <div className="App">
      <Navbar/>
      <Meme/>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <textarea
          placeholder="comment"
          value={formData.comments}
          name="textarea"
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="checkbox"
          id="isFriendly"
          name="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
        />
        <label htmlFor="isFriendly">Are you friendly</label>
        <br />
        <br />
        <legend>Current employment status</legend>
        <br />
        <br />
        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <br />
        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part time</label>
        <br />
        <br />
        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full=time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full time</label>
        <br />
        <br />

        <label htmlFor="favColor">What is your favotite color?</label>
        <select
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
          name="favColor"
        >
          <option>--Choose--</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="white">White</option>
          <option value="black">Black</option>
        </select>
        <button>Submit</button>
      </form> */}
  
    </div>
  );
}

export default App;
