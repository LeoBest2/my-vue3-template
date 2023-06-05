import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/test",
    method: "get",
    response: ({}) => {
      return {
        code: 0,
        data: {
          name: "leo",
        },
      };
    },
  },
] as MockMethod[];
