import { Box, Stack } from "@mui/material";
import React from "react";
import EventContainer from "../../sections/event-container";
import { MOCK_EVENTS } from "../../mock/_events";

const EventPage = () => {
  return (
    <Stack spacing={4}>
      <EventContainer title="กิจกรรมทั้งหมด" events={MOCK_EVENTS} />
    </Stack>
  );
};

export default EventPage;
