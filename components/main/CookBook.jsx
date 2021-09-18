import React from 'react';
import Image from 'next/image';

function CookBook() {
  return (
    <div>
      <h1 className="text-2xl font-bold">New Cookbook</h1>
      <div className="relative mt-2 border-4 border-yellow-300 first-line:w-400px h-600px">
        <Image
          className=""
          src="http://placekitten.com/400/600"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default CookBook;
