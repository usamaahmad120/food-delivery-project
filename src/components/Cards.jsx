import React from 'react';
import image1 from '../assets/image1.avif';

function Cards() {
  return (
    <div>
      <div>
        <img src={image1} alt="Card" className="w-full h-auto rounded-lg" />
      </div>
      <div>
        {/* You can add text or buttons here */}
      </div>
    </div>
  );
}

export default Cards;
