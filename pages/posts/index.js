import { useState } from "react";

const Posts = () => {
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const data = {
    nama: name,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const len = data.push(setName(e.target.value));
    console.log(len, "inin dada");
  };

  console.log(data);
  return (
    <>
      <form>
        <input type="text" name="nama" value={name} onChange={handleName} />
        <input type="submit" value={"submit"} onClick={handleSubmit} />
      </form>
      <h1>{name}</h1>
    </>
  );
};
export default Posts;
