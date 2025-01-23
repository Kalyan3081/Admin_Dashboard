import { useState } from "react";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/header";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core"; // Correct import
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

const Calendar = () => {

    const theme = useTheme() // accessing the colors and mode
    const colors = tokens(theme.palette.mode) //dark or light mode
    const [currentEvents, setCurrentEvents] = useState([])  // adding events in the calendar

    const handleDateClick = (selected) => {
        const title = prompt("Please enter the title")
        const calendarAPI = selected.view.calendar //a reference to the calendar instance 
        calendarAPI.unselect() // clears the selected date range on the calendar 

        // if title is already present then below code is used for adding the event in that particular date
        if (title) {
            calendarAPI.addEvent({
                id: `${selected.dateStr}-${title}`, //Assigns a unique ID
                title,
                // below startStr, endStr & allday are the properties built into the FullCalendar library
                start: selected.startStr,
                end: selected.endStr,
                allday: selected.allday,
            })
        }
    }

    // Belew fun performs deleteing the events from calendar 
    const handleEventClick = () => {
        if (window.confirm(`Are you sure you want to delete this event ${selected.event.title}`)) {
            selected.event.remove()
        }
    }

    return (
        <Box m="20px">
            <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR */}
                <Box
                    flex="1 1 20%"
                    borderRadius="5px"
                    backgroundColor={
                        theme.palette.mode === "dark" ? colors.primary[400] : theme.palette.grey[200]
                    }
                    p="15px"
                    mb="20px"
                >
                    <Typography variant="h5">Events</Typography>

                    {/* LIST - for list of events */}
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor:
                                        theme.palette.mode === "dark" ? colors.primary[500] : theme.palette.grey[500],
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    primaryTypographyProps={{
                                        style: {
                                            color: theme.palette.mode === "dark" ? colors.grey[100] : colors.grey[100],
                                        },
                                    }}
                                    secondary={
                                        <Typography
                                            style={{
                                                color: theme.palette.mode === "dark" ? colors.grey[200] : colors.grey[200],
                                            }}
                                        >
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>


                {/* CALENDAR MAIN */}
                <Box flex="1 1 100%" ml="15px" mb="20px">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "12315",
                                title: "All-day event",
                                date: "2025-01-22",
                            },
                            {
                                id: "54321",
                                title: "All-day event",
                                date: "2025-01-23",
                            },

                        ]}
                    />
                </Box >
            </Box>
        </Box>
    );

}

export default Calendar
