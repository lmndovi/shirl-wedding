import Link from "next/link";
import React from "react";

function Location() {
  return (
    <div className="flex-col space-y-16 p-3 text-center py-20">
      <div>
        <h1 className="text-3xl font-semibold">Venue: </h1>
        <div className="my-4 text-lg">
          <p>Woolston Manor Golf Club </p>
          <p>Abridge Road</p>
          <p>Chigwell</p>
          <p> IG7 6BX</p>
          <p> England</p>
          <Link href="https://woolstonmanor.co.uk/">
            woolstonmanorgolf.co.uk
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Accommodation: </h1>
        <div className="my-4 text-lg">
          <p>735 Chigwell Road </p>
          <p> Woodford Green </p>
          <p>IG8 8AS</p>
          <p>England</p>
          <Link href="https://www.travelodge.co.uk/hotels/454/London-Chigwell-hotel">
            travelodge.co.uk
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Location;
