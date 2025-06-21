import { Box } from "@mui/material";
import Header from "../../components/Header.jsx";
import Geographychart from "../../components/Geographychart.jsx";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh">
        <Geographychart />
      </Box>
    </Box>
  );
};


export default Geography;