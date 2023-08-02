import { createFetch } from "@vueuse/core";

export const useCustomFetch = createFetch({
  baseUrl: "http://localhost:4030/api",
  combination: "overwrite",
  options: {
    // beforeFetch in pre-configured instance will only run when the newly spawned instance do not pass beforeFetch
    async beforeFetch({ options }) {
      // const myToken = await getMyToken()
      // options.headers.Authorization = `Bearer ${myToken}`

      return { options };
    },
  },
});

// use useMyFetch beforeFetch
// const { isFetching, error, data } = useMyFetch('users')

// use custom beforeFetch
// const { isFetching, error, data } = useMyFetch('users', {
//   async beforeFetch({ url, options, cancel }) {
//     const myToken = await getMyToken()

//     if (!myToken)
//       cancel()

//     options.headers = {
//       ...options.headers,
//       Authorization: `Bearer ${myToken}`,
//     }

//     return {
//       options,
//     }
//   },
// })
