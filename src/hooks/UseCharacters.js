import { useEffect, useState } from "react";
import Api from "../api/Api";

export default () => {
  const [characters, setCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm, status) => {
    // console.log("0000000000000", searchTerm);
    try {
      const response = await Api.get(
        `/character/?name=${searchTerm}&status=${status ? status : ""}`
      );
      // console.log("00000", response.data.results);
      setCharacters(response.data.results);
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("rick");
  }, []);

  return [searchApi, characters, errorMessage];
};
