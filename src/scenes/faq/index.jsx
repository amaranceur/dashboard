import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>
                        How do I reset my dashboard password?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You can reset your password from the account settings page. If you forgot it,
                        click “Forgot Password” on the login screen and follow the instructions sent to your email.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>
                        Can I customize the charts on my dashboard?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, you can customize chart types, colors, and data sources from the "Customize" section
                        in the settings menu.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>
                        How often is data on the dashboard updated?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Data is refreshed every 15 minutes by default. You can change the refresh interval in
                        your dashboard settings.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>
                        Is there a dark mode available?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Absolutely! You can switch between light and dark modes using the toggle in the top-right corner
                        of the interface.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>
                        How do I export dashboard reports?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Go to the Reports section, select the date range and format, then click "Export" to download
                        your report as PDF or Excel.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
