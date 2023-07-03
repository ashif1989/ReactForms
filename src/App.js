import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const proficientLevel = ["Beginner", "Intermediate", "Expert"];

  let handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  let handleAgeChange = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setAge("");
    console.log("Form has been submitted");
  };

  let handleOnClickMale = () => {
    console.log("Male has been clicked");
  };

  let handleOnClickFemale = () => {
    console.log("Female has been clicked");
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleNameChange(e)}
        ></input>
        <br />
        <br />
        <label htmlFor="">Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleAgeChange(e)}
        ></input>
        <br />
        <br />
        <label htmlFor="">Proficiency Level: </label>
        <select>
          {proficientLevel.map((p) => (
            <option value={p}>{p}</option>
          ))}
        </select>
        <br />
        <br />
        <label>Sex: </label>
        <label htmlFor="male">Male</label>
        <input
          default
          name="sex"
          type="radio"
          id="male"
          value="male"
          onClick={handleOnClickMale}
        ></input>
        <label htmlFor="Female">Female</label>
        <input
          name="sex"
          type="radio"
          id="female"
          value="female"
          onClick={handleOnClickFemale}
        ></input>
        <br />
        <br />
        <label>Skills: </label>
        <label htmlFor="react">React</label>
        <input name="skills" type="checkbox" id="react" value="react"></input>
        <label htmlFor="html">HTML</label>
        <input name="skills" type="checkbox" id="html" value="html"></input>
        <label htmlFor="css">CSS</label>
        <input name="skills" type="checkbox" id="css" value="css"></input>
        <br />
        <br />
        <button>Submit</button>
        {name} {age}
      </form>
    </>
  );
}
