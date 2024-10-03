import { Box, Stack } from "@mui/material";
import React from "react";
import EventContainer from "../../sections/event-container";
import { MOCK_EVENTS } from "../../mock/_events";

const HomePage = () => {
  return (
    <Stack spacing={4}>
      <EventContainer
        title="กิจกรรมที่ช่วงนี้ผู้คนสนใจ"
        events={MOCK_EVENTS.slice(0, 4)}
      />
      <EventContainer
        title="กิจกรรมที่จากหน่วยงาน / คณะ"
        events={MOCK_EVENTS.slice(4, 8)}
      />
      <EventContainer title="กิจกรรมทั้งหมด" events={MOCK_EVENTS} />
    </Stack>
  );
};

export default HomePage;
