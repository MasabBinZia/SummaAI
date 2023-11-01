import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey: string =
  "f1e02de721msha67b305163fedd3p13565ajsnfffcbe49ce8d";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
