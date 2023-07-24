import React from "react";

function Location() {
  return (
    <div className="flex-col space-y-5 p-3">
      <div>
        <h1 className="text-lg font-semibold">Venue: </h1>
        <div>
          <p>Woolston Manor Golf Club </p>
          <p>Abridge Road</p>
          <p>Chigwell</p>
          <p> IG7 6BX</p>
          <p> England</p>
          <p>woolstonmanorgolf.co.uk</p>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-semibold">Accommodation: </h1>
        <div>
          <p>735 Chigwell Road </p>
          <p> Woodford Green </p>
          <p>IG8 8AS</p>
          <p>England</p>
          <p>travelodge.co.uk</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
