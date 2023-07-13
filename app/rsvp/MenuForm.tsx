import React from "react";

function MenuForm() {
  return (
    <div>
      {" "}
      <form action="https://docs.google.com/forms/d/e/1FAIpQLScXbqGmV0GI07WJvthXzanWuKaWOlNDDj2tx3zPdFpXa3BgwA/formResponse">
        <div>
          <h1>Entree</h1>
          <label htmlFor="entry.1477965653">
            <h2>Scottish Salmon with Beetroot & Granary Bread</h2>
          </label>
          <input type="checkbox" name="entry.1477965653" />
          <label htmlFor="entry.1477965653">
            <h2>Greek Meze with Shish Kebab</h2>
          </label>
          <input type="checkbox" name="entry.1477965653" />
          <label htmlFor="entry.1477965653">
            <h2>Homemade Soup (Carrot & Coriander Spicy Parsnip)</h2>
          </label>
          <input type="checkbox" name="entry.1477965653" />
        </div>

        <div>
          <h1>Main Course</h1>
          <label htmlFor="entry.711673005">
            <h2>
              Chargrilled Breast of Chicken served with Roast Mediterranean
              Vegetables, Dauphinois Potatoes and a Tangy Tomato Sauce
            </h2>
          </label>
          <input type="checkbox" name="entry.711673005" />
          <label htmlFor="entry.711673005">
            <h2>
              Rump of Lamb or Lamb Shank with Fondant Potato, Swede, Carrot
              Purée and Grilled Vegetables with a Mint Jus
            </h2>
          </label>
          <input type="checkbox" name="entry.711673005" />
          <label htmlFor="entry.711673005">
            <h2>
              Roasted Sea Bass with Provençals of Vegetables, a Red Pepper Sauce
              and Roasted New Potatoes
            </h2>
          </label>
          <input type="checkbox" name="entry.711673005" />
          <label htmlFor="entry.711673005">
            <h2>Roast Vegetable Wellington</h2>
          </label>
          <input type="checkbox" name="entry.711673005" />
        </div>

        <div>
          <h1>Desserts</h1>
          <label htmlFor="entry.1175346112">
            <h2>Profiteroles with Chocolate Sauce</h2>
          </label>
          <input type="checkbox" name="entry.1175346112" />
          <label htmlFor="entry.1175346112">
            <h2>Apple Crumb with Custard</h2>
          </label>
          <input type="checkbox" name="entry.1175346112" />
          <label htmlFor="entry.1175346112">
            <h2>Trio of Desserts</h2>
          </label>
          <input type="checkbox" name="entry.1175346112" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MenuForm;
