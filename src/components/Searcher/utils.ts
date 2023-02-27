import moment from "moment";

export const sortByDate = (dateA: string, dateB: string) => moment(dateA) < moment(dateB) ? 1 : -1;