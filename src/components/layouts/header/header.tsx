import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import ReplaceParameterInSearchString from "../../../assets/functions/ReplaceParameterInSearchString";

const Header = () => {
  const [searchName, setSearchName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    navigate(ReplaceParameterInSearchString(search, `name`, searchName));
  }, [searchName, navigate, search]);
  useEffect(() => {
    navigate(ReplaceParameterInSearchString(search, `status`, status));
  }, [status, navigate, search]);
  useEffect(() => {
    navigate(ReplaceParameterInSearchString(search, `species`, species));
  }, [species, navigate, search]);
  useEffect(() => {
    navigate(ReplaceParameterInSearchString(search, `type`, type));
  }, [type, navigate, search]);
  useEffect(() => {
    navigate(ReplaceParameterInSearchString(search, `gender`, gender));
  }, [gender, navigate, search]);
  return (
    <header className={styles.header}>
      <form className={styles["filters-form"]}>
        <TextField
          sx={{ m: 0.5, maxWidth: 200 }}
          size={"small"}
          value={searchName}
          id="outlined-basic"
          label="name"
          variant="outlined"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <FormControl sx={{ m: 0.6, maxWidth: 150, minWidth: 150 }} size="small">
          <InputLabel id="demo-simple-select-helper-label">status</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={status}
            label="status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">any</MenuItem>
            <MenuItem value={"alive"}>alive</MenuItem>
            <MenuItem value={"dead"}>dead</MenuItem>
            <MenuItem value={"unknown"}>unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ m: 0.5, maxWidth: 150, minWidth: 150, Height: 40 }}
          size="small"
        >
          <InputLabel id="demo-simple-select-helper-label">gender</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={gender}
            label="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value="">any</MenuItem>
            <MenuItem value={"female"}>female</MenuItem>
            <MenuItem value={"male"}>male</MenuItem>
            <MenuItem value={"genderless"}>genderless</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Type"
          sx={{ m: 0.5, maxWidth: 200 }}
          size={"small"}
          value={type}
          variant="outlined"
          onChange={(e) => setType(e.target.value)}
        />
        <TextField
          label="species"
          sx={{ m: 0.5, maxWidth: 200 }}
          size={"small"}
          value={species}
          variant="outlined"
          onChange={(e) => setSpecies(e.target.value)}
        />
      </form>
    </header>
  );
};

export default React.memo(Header);
