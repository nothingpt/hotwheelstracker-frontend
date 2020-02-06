// src\components\ModelList.js
import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Styled from "styled-components";

import Model from "./Model";

const CarContainer = Styled.div`
  margin-top: 4px;
  grid-column: 1/-1;
  justify-self: center;
  grid-row-start: 2;
`;

const HOTWHEELS_QUERY = gql`
  query HOTWHEELS_QUERY {
    hotwheels {
      _id
      model
      colors
      description
    }
  }
`;

const ModelList = () => {
  const { loading, error, data } = useQuery(HOTWHEELS_QUERY);

  if (loading) return <h4>Loading models...</h4>;
  if (error) return <h4>An error occurred.</h4>;
  const hotwheels = data.hotwheels || [];
  return (
    <CarContainer>
      {hotwheels.map(hotwheel => (
        <Model hotwheel={hotwheel} key={hotwheel._id} />
      ))}
    </CarContainer>
  );
};

export default ModelList;
