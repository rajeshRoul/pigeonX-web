import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

const Container = styled(Box)(({ theme }) => ({
  height: 35,
  width: "100%",
  borderRadius: 8,
  border: `1px solid ${theme.palette.primary.main}`,
  boxSizing: "border-box",
  padding: "2px 8px",
  display: "flex",
  alignItems: "center",
  "& .searchIcon": {
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  "&:focus-within": {
    borderWidth: "2px",
  },
}));

const SearchBar = ({ onChange = () => {}, onSearch = () => {}, ...props }) => {
  const [text, setText] = useState("");
  const [updatedText, setUpdatedText] = useState("");

  const onTextChange = (e) => {
    setText(e.target.value);
    const timeOutId = setTimeout(() => setUpdatedText(e.target.value), 1500);
    return () => clearTimeout(timeOutId);
  };

  useEffect(() => {
    onChange(updatedText);
  }, [updatedText, onChange]);

  return (
    <Container {...props}>
      <InputBase
        sx={{ mr: 1, flex: 1 }}
        placeholder="Search for Peoples and posts"
        inputProps={{ "aria-label": "Search" }}
        value={text}
        onChange={onTextChange}
      />
      <span onClick={() => onSearch(text)} role="button" className="searchIcon">
        <SearchIcon />
      </span>
    </Container>
  );
};

export default SearchBar;
