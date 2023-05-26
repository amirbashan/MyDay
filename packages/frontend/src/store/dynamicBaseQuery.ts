import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/dist/query/react';
import config from '../config';

export const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, WebApi, extraOptions) => {
  const server = config.general.server;
  const baseUrl = `${server.protocol}://${server.baseUrl}:${server.port}/${server.version}`;
  const rawBaseQuery = fetchBaseQuery({ baseUrl });
  return rawBaseQuery(args, WebApi, extraOptions);
};
