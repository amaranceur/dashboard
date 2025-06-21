import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useState } from 'react'
import timeGridPlugin from '@fullcalendar/timegrid' // needed for timeGrid
import listPlugin from '@fullcalendar/list' // needed for list view
import { Box,List,ListItem,ListItemText,Typography,useTheme } from '@mui/material'
import Header from '../../components/Header.jsx'
import { tokens } from '../../theme'
const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);
    const handleDateClick = (selected) => {
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect(); // clear date selection
        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end:  selected.endStr,
                allDay: selected.allDay,
            });
        }
    };
    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'?`)) {
            selected.event.remove();
        }
    };
    return (
        <Box m="20px">
            <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
            <Box display="flex" justifyContent="space-between">
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
                    <Typography variant="h5" fontWeight="600" color={colors.grey[100]} mb="10px">Events</Typography>
                    <List>
                        {currentEvents.map(event => (
                            <ListItem key={event.id} sx={{ backgroundColor: colors.primary[500], marginBottom: '10px', borderRadius: '4px' }}>
                                <ListItemText primary={event.title} secondary={event.start.toLocaleString()} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                        }}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={true}
                        initialEvents={[
                            { id: '1', title: 'All-day event', date: '2023-10-01' },
                            { id: '2', title: 'Timed event', date: '2023-10-02' }
                        ]}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                    />
                </Box>
            </Box>
        </Box>

    );
};

export default Calendar