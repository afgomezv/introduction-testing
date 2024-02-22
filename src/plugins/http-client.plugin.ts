import axios from "axios";
import { error } from "console";

export const httpClientPlugin = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
    // const resp = await fetch( url );
    // return await resp.json();
  },

  // post: async (url: string, body: any) => {
  //   throw error("Not  implemented");
  // },
  // put: async (url: string, body: any) => {
  //   throw error("Not  implemented");
  // },
  // delete: async (url: string) => {
  //   throw error("Not  implemented");
  // },
};
