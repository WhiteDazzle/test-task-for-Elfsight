import React, { FormEvent, useState } from "react";
import styles from "./Filters.module.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
const Filters = ({
  onChangeFilters,
}: {
  onChangeFilters: (filter: string) => void;
}) => {
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filtersString =
      `${status && `&status=${status}`}` +
      `${species && `&species=${species}`}` +
      `${type && `&type=${type}`}` +
      `${gender && `&gender=${gender}`}`;
    onChangeFilters(filtersString);
  };
  return (
    <form className={styles["filters-form"]} onSubmit={handleSubmit}>
      <FormControl sx={{ m: 0.6, minWidth: 200 }} size="small">
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
      <FormControl sx={{ m: 0.5, minWidth: 200, Height: 40 }} size="small">
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

      <button type={"submit"}> применить </button>
    </form>
  );
};

export default React.memo(Filters);
