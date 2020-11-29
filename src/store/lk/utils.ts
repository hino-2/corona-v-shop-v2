import { User } from "./types";

export const getName = ({ firstName, login }: User) => firstName || login || "друг";
