import React from "react";

const Gifts = () => {
  return (
    <div className="mt-12">
      <div className="text-center font-semibold text-3xl">
        <h1>Gifts</h1>
      </div>
      <div className="flex-col space-y-12 mx-auto text-center pt-16 px-24">
        <p className="text-lg">
          The most important gift to us is having you share in our special day.
          But if you wish to contribute in some other way, we would love a few
          pennies to put in our pot, for our honeymoon trip after tying the
          knot!
        </p>
        <div>
          <h2 className="text-2xl font-semibold mb-5">Account Details</h2>
          <div className="flex-col space-y-5 text-lg">
            <h4>Name: Shirley Cecile</h4>
            <h4>Sort Code: 07-08-06</h4>
            <h4>Account No: 18136373</h4>
            <h4>Trail blazers/Kuoni - account details TBC</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
