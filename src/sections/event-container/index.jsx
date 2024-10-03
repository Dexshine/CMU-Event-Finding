import { Box, Typography } from "@mui/material";
import React from "react";
import EventCard from "../../components/EventCard";

const EventContainer = ({ title, events }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2, mb: 2, alignItems: "center" }}>
        <Typography variant="h3" style={{ color: "#6B69B1" }}>
          |
        </Typography>
        <Typography variant="h4">{title}</Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            image={event.images[0]}
            tags={event.tags}
            qty={event.interested_qty}
            startDate={event.start_date}
          />
        ))}
      </Box>
    </Box>
  );
};

export default EventContainer;
