import React from 'react';

function PopularRecipes() {
  return (
    <>
      <h1 className="text-2xl font-bold">Popular Recipes</h1>
      <div className="grid grid-cols-3 mt-2">
        <img
          className="border-2 border-black"
          src="http://placekitten.com/200/200"
        />
        <h3 className="col-span-2 pl-2 text-lg font-medium ">
          Cheesy Pizza with pineapple with herbs and watermelon
        </h3>
      </div>
      <div className="grid grid-cols-3 mt-2">
        <img
          className="border-2 border-black"
          src="http://placekitten.com/g/200/200"
        />
        <h3 className="col-span-2 pl-2 mt-2 text-lg font-medium ">
          Cheesy Pizza with pineapple with herbs and watermelon
        </h3>
      </div>
      <div className="grid grid-cols-3 mt-2">
        <img
          className="border-2 border-black"
          src="http://placekitten.com/200/200"
        />
        <h3 className="col-span-2 pl-2 text-lg font-medium ">
          Cheesy Pizza with pineapple with herbs and watermelon
        </h3>
      </div>
      <div className="grid grid-cols-3 mt-2">
        <img
          className="border-2 border-black"
          src="http://placekitten.com/g/200/200"
        />
        <h3 className="col-span-2 pl-2 text-lg font-medium ">
          Cheesy Pizza with pineapple with herbs and watermelon
        </h3>
      </div>
    </>
  );
}

export default PopularRecipes;
