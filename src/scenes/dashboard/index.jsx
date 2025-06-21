import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from '../../theme'
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header.jsx";
import LineChart from "../../components/Linechart.jsx";
import GeographyChart from "../../components/Geographychart.jsx";
import BarChart from "../../components/Barchart";
import StatBox from "../../components/Statbox.jsx";
import ProgressCircle from "../../components/ProgressCircle.jsx";


export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
    <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
          >
          <DownloadOutlinedIcon />
          Download Reports
        </Button>
      </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"

      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="20px"
          borderRadius="8px">
        <StatBox 
          title="12,361"
          subtitle="Emails Sent"
          p="20px"
          icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          progress="0.75"
          increase="+14%" />
          </Box>
             <Box
          gridColumn="span 3"
          p="20px"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="8px">
        <StatBox 
          title="431,225"
          subtitle="Sales Obtained"
          icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          progress="0.50"
          increase="+21%" />

          </Box>
             <Box
          gridColumn="span 3"
          p="20px"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="8px">
        <StatBox 
          title="32,441"
          subtitle="New Clients"
          icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          progress="0.30"
          increase="+5%" />
          </Box>
             <Box
          gridColumn="span 3"

          p="20px"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="8px">
        <StatBox
          title="1,325,134"
          subtitle="Traffic Inbound"
          icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          progress="0.80"
          increase="+43%" />
          </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          >
          <Box 
          mt="25px" p="0 30px" 
          display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h5" fontWeight={600} color={colors.grey[100]} >Revenue Generated</Typography>
            <Typography variant="h3" fontWeight={500} color={colors.greenAccent[500]}>$59,000</Typography>
          </Box>
            <Box>
               <IconButton>
              <DownloadOutlinedIcon sx={{ color: colors.greenAccent[500], fontSize: "26px" }} />
            </IconButton>
            </Box>

            </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.grey[100]}
          p="15px"
          >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Recent Transactions
          </Typography>

          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>
                {transaction.date}
              </Box>
              <Box color={colors.greenAccent[500]}>
                ${transaction.cost}
              </Box>
            </Box>
          ))}

        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight='600' >Campaign</Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px" >
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{mt:"15px"}}  >$48,000 Revenue</Typography>
            <Typography  >Includes extra misc expenditures and costs</Typography>

          </Box>

        </Box>
           <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h5" fontWeight='600' sx={{p:"30px 30px 0 30px"}} >Sales Quantity</Typography>
          <Box height="250px" mt="-20px" >
            <BarChart isDashboard={true} />

          </Box>

        </Box>
           <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight='600' sx={{mb:"15px"}} >Geography based trafic</Typography>
          <Box height="200px" mt="-20px" >
            <GeographyChart isDashboard={true} />

          </Box>

        </Box>
      </Box>
    </Box>
  )
}
