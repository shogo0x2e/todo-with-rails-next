"use client";

import { gql, useQuery } from "@apollo/client";

const TEST_QUERY = gql(`query {
  testField
}`);

const GetTestField = () => {
  const { data, loading, error } = useQuery(TEST_QUERY);
  if (loading) return <div>LOADING...</div>;
  if (error) return <div>{error.message}</div>;
  return <div>{data?.testField}</div>;
};

export default GetTestField;
