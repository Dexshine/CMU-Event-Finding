import { People } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { toDate } from "../utils/function/date";

const EventCard = ({ title, tags = [], image, qty, date }) => {
  const theme = useTheme();

  return (
    <Card sx={{ width: "260px", borderRadius: theme.shape.borderRadius }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent sx={{ paddingTop: "5px" }}>
          <Typography
            variant="h6"
            color="primary"
            fontWeight={400}
            height={40}
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            Tags : {tags.join(", ")}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={1}
            sx={{ mt: 1 }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <People fontSize="small" />
              <Typography variant="caption" color="text.secondary">
                {qty}
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">
              Date : {toDate(date)}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCard;
