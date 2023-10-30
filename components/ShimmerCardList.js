import React from "react";
import Shimmer from "./Shimmer";

const ShimmerCardList = () => {
  const numberOfShimmerCards = 5; // Number of shimmer cards you want to generate

  // Create an array with the desired number of shimmer cards
  const shimmerCards = Array.from({ length: numberOfShimmerCards }, (_, index) => (
    <Shimmer key={index} />
  ));

  return (
    <div>
      {shimmerCards}
    </div>
  );
};

export default ShimmerCardList;
