import React from 'react';
import Featured from './Featured';
import PopularRecipes from './PopularRecipes';
import CookBook from './CookBook';
import Image from 'next/image';

function MainContent() {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 pt-5 sm:grid-cols-2 md:grid-cols-3 ">
        <div className="relative border-2 border-black w-400px h-500px">
          <Image
            className=""
            src="http://placekitten.com/450/500"
            layout="fill"
          />
        </div>
        <div className="relative border-2 border-black w-400px h-500px">
          <Image
            className=""
            src="http://placekitten.com/500/500"
            layout="fill"
          />
        </div>
        <div className="relative border-2 border-black w-400px h-500px">
          <Image
            className=""
            src="http://placekitten.com/g/400/500"
            layout="fill"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 pt-5 sm:grid-cols-2 md:grid-cols-3 ">
        <div className="">
          <Featured />
        </div>
        <div className="">
          <PopularRecipes />
        </div>
        <div className="">
          <CookBook />
        </div>
      </div>
    </>
  );
}

export default MainContent;
