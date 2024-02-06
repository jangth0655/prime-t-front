import dayjs from "dayjs";

export const formatDateYYYMMDD = (date: Date) => {
  return dayjs(date).format("YYYY.MM.DD");
};
