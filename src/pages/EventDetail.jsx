import React from 'react';
import image from '../assets/images/event-example.jpg';

function EventDetail() {
  return (
    <div>
      <img src={image} alt="" />
      <div className="px-4 my-6">
        <p className="font-bold text-4xl">Event Name</p>
        <p>
          <span className="font-bold">100</span>
          <span> People are joined</span>
        </p>
      </div>
    </div>
  );
}

export default EventDetail;
