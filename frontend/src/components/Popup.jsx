import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 800,
  bgcolor: "background.paper",
  boxShadow: 16,
  p: 4,
};

const CheckboxStyle = {
  color: "white",
  fontWeight: "bold",
  backgroundColor: "#AB6FF8",
  margin: "8px",
  borderRadius: "10px",
  paddingRight: "12px",
  "&.Mui-checked": {
    color: '#7752BD',
  },
};

export default function Popup() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [genres, setGenres] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const URL = "http://localhost:8000/api/v1/list/genres";

  const fetchGenres = async () => {
    try {
      const results = await axios.get(URL);
      setGenres(results.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenreClick = (genre) => {
    if(genreList.length == 4 && !genreList.includes(genre)){
      window.alert("You can select only 4 genres");
      return;
    }
    if (genreList.includes(genre)) {
      setGenreList(genreList.filter((item) => item !== genre));
    } else {
      setGenreList([...genreList, genre]);
    }
  };

  console.log(genreList);

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="mb-10  bg-purple-500 p-8 text-white  font-bold">
            Select Your Favourite Genres
          </div>
          <div>
            {genres &&
              genres.map((genre) => {
                if(genre == "8.8"){
                  return;
                }
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={genreList.includes(genre)}
                        onChange={() => handleGenreClick(genre)}
                        name={genre}
                        sx={CheckboxStyle}
                      />
                    }
                    label={genre}
                    sx={CheckboxStyle}
                  />
                );
              })}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
