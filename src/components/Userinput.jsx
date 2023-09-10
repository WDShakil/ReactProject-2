import { useState } from "react";
import User from "./User";
import { RxCross2 } from "react-icons/rx";
function Userinput() {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    profession: "",
  });
  const { name, email, profession } = userdata;

  const changeHandler = (event) => {
    const name = event.target.name;
    setUserdata((userdata) => {
      return {
        ...userdata,
        [name]: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Create an object with the input data and pass it to the User component
    const inputData = {
      name: name,
      email: email,
      profession: profession,
    };
    if (name === name && email === email && profession === profession) {
      document.querySelector(".userProfile").style.display = "block";
    }
    // Pass the inputData object to the User component
    setInputdata(inputData);
    setUserdata({ name: "", email: "", profession: "" });
  };

  const [inputdata, setInputdata] = useState({});
  return (
    <>
      <div className="wrapper">
        <form className="inputForm" onSubmit={submitHandler}>
          <button className="closebtn">
            <RxCross2></RxCross2>
          </button>
          <div className="formWrapper">
            <div className="inputgroup">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                id="name"
                onChange={changeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={changeHandler}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="profession ">Profession :</label>
              <input
                type="text"
                name="profession"
                id="profession"
                value={profession}
                onChange={changeHandler}
              />
            </div>
            <div className="inputgroup">
              <button className="inputButton" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
        {/* Pass userdata as an object to the User component */}
        <div className="profileWrapper">
          <User sendData={inputdata}></User>
        </div>
      </div>
    </>
  );
}

export default Userinput;
