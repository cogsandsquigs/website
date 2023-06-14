import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'be1486960cf6533fb318339f7b8cec7971cc4009', queries });
export default client;
  