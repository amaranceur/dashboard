import { Box } from "@mui/material";
import Header from "../../components/Header";
import Geographychart from "../../components/Geographychart";

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