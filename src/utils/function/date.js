import dayjs from "dayjs";

export const toDate = (date, format = "DD MMM BBBB") => {
  return dayjs(date).format(format);
};
