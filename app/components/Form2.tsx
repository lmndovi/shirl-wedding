"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type RsvpFormData = {
  name: string;
  rsvp: string[];
  starters: string[];
  mains: string[];
  desserts: string[];
  [key: string]: string | string[];
};

export default function RsvpForm() {
  const [formData, setFormData] = useState<RsvpFormData>({
    name: "",
    rsvp: [],
    starters: [],
    mains: [],
    desserts: [],
  });

  const [showPopup, setShowPopup] = useState(false);

  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = event.target;

    setFormData((prevData) => {
      const updatedValues = checked
        ? [...(prevData[name] as string[]), value]
        : (prevData[name] as string[]).filter(
            (option: string) => option !== value
          );
      return {
        ...prevData,
        [name]: updatedValues,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormsEndpoint =
      "https://docs.google.com/forms/d/e/1FAIpQLSdddeQDHW3oZpHvLWbU5lDmkv9lnT3CWKIctJDHnN59qgWe_w/formResponse"; // Replace with your Google Forms endpoint

    try {
      const formDataEncoded = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((option) => {
            const entryKey = `entry.${getEntryKey(key)}`;
            formDataEncoded.append(entryKey, option);
          });
        } else {
          const entryKey = `entry.${getEntryKey(key)}`;
          formDataEncoded.append(entryKey, value);
        }
      });

      await fetch(googleFormsEndpoint, {
        method: "POST",
        body: formDataEncoded,
      });

      // Handle success
      router.push("/rsvp/success");
    } catch (error) {
      // Handle submission error
      setShowPopup(true); // Show the pop-up
      // Wait for 3 seconds before redirecting to the homepage
      setTimeout(() => {
        router.push("/");
      }, 6000);
    }
  };

  const getEntryKey = (key: string) => {
    // Map the form field name to the corresponding Google Forms entry key
    const entryKeys: Record<string, string> = {
      name: "29388653",
      rsvp: "1224083778",
      starters: "2051004852",
      mains: "461016866",
      desserts: "294038248",
      // Add more fields as needed
    };

    return entryKeys[key];
  };

  return (
    <div className="mt-10">
      <div>
        {/* Pop-up */}

        {showPopup && (
          <div className="p-5 rounded-xl bg-[#529864] text-white mx-auto my-8 z-50 shadow-md top-2/4 w-1/2 text-center font-sans">
            <h1 className="text-lg font-bold ">Submission Successful!</h1>
            <p>Thank you for submitting your RSVP.</p>
          </div>
        )}
      </div>

      <h1 className="text-3xl text-center font-bold">RSVP</h1>
      <form className="mt-8 ml-10" onSubmit={handleSubmit}>
        <label className="text-lg">
          Name(s) of our fabulous guests:{" "}
          <input
            placeholder="John Doe"
            className=" font-normal pl-3 rounded-lg"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>

        {/* RSVP */}
        <div className="my-10 p-1">
          <label>
            <h4 className="font-semibold text-lg">Will You Be Joining Us?</h4>

            <label className="">
              Gracefully Accept
              <input
                className="align-middle ml-2 my-4"
                type="checkbox"
                name="rsvp"
                value="Gracefully Accept"
                checked={formData.rsvp.includes("Gracefully Accept")}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />
            <label className="">
              Regretfully Decline
              <input
                className="align-middle ml-2 my-3"
                type="checkbox"
                name="rsvp"
                value="Regretfully Decline"
                checked={formData.rsvp.includes("Regretfully Decline")}
                onChange={handleCheckboxChange}
              />
            </label>
          </label>
        </div>

        {/* Starters */}
        <label className="text-lg italic">
          <h2 className="text-xl font-semibold text-center mt-5">Entrée</h2>
          <br />
          <label className="">
            Scottish salmon with beetroot & granary bread
            <input
              className="align-middle ml-2 my-3"
              type="checkbox"
              name="starters"
              value="Scottish Salmon with Beetroot & Granary Bread"
              checked={formData.starters.includes(
                "Scottish Salmon with Beetroot & Granary Bread"
              )}
              onChange={handleCheckboxChange}
            />
          </label>
          <br />
          <label className="">
            Greek meze with shish kebab
            <input
              className="align-middle ml-2 my-3"
              type="checkbox"
              name="starters"
              value="Greek Meze with Shish Kebab"
              checked={formData.starters.includes(
                "Greek Meze with Shish Kebab"
              )}
              onChange={handleCheckboxChange}
            />
          </label>
          <br />
          <label className="italic">
            Homemade soup (carrot & coriander spicy parsnip)
            <input
              className="align-middle ml-2 my-3"
              type="checkbox"
              name="starters"
              value="Homemade Soup (Carrot & Coriander Spicy Parsnip)"
              checked={formData.starters.includes(
                "Homemade Soup (Carrot & Coriander Spicy Parsnip)"
              )}
              onChange={handleCheckboxChange}
            />
          </label>
        </label>
        <br />

        {/* Mains */}
        <br />
        <div className="mt-5">
          <label className="text-lg italic">
            <h2 className="text-xl font-semibold text-center">Mains</h2>
            <br />

            <label>
              Chargrilled breast of chicken served with roasted mediterranean
              vegetables, dauphinois potatoes and a tangy tomato sauce
              <input
                className="align-middle ml-2 my-[17px]"
                type="checkbox"
                name="mains"
                value="Chargrilled Breast of Chicken served with Roasted Mediterranean Vegetables, Dauphinois Potatoes and a Tangy Tomato Sauce"
                checked={formData.mains.includes(
                  "Chargrilled Breast of Chicken served with Roasted Mediterranean Vegetables, Dauphinois Potatoes and a Tangy Tomato Sauce"
                )}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />
            <br />
            <label>
              Rump of Lamb or Lamb Shank with Fondant Potato, Swede, Carrot
              Purée and Grilled Vegetables with a Mint Jus
              <input
                className="align-middle ml-2 my-[17px]"
                type="checkbox"
                name="mains"
                value="Rump of Lamb or Lamb Shank with Fondant Potato, Swede, Carrot Purée and Grilled Vegetables with a Mint Jus"
                checked={formData.mains.includes(
                  "Rump of Lamb or Lamb Shank with Fondant Potato, Swede, Carrot Purée and Grilled Vegetables with a Mint Jus"
                )}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />
            <br />
            <label>
              Roasted Sea Bass with Provençals of Vegetables, a Red Pepper Sauce
              and Roasted New Potatoes
              <input
                className="align-middle ml-2 my-[17px]"
                type="checkbox"
                name="mains"
                value="Roasted Sea Bass with Provençals of Vegetables, a Red Pepper Sauce and Roasted New Potatoes"
                checked={formData.mains.includes(
                  "Roasted Sea Bass with Provençals of Vegetables, a Red Pepper Sauce and Roasted New Potatoes"
                )}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />
            <br />
            <h3 className="my-2 font-semibold">Vegetarian Option</h3>
            <label className="italic">
              Roast Vegetable Wellington
              <input
                className="align-middle ml-2 my-[17px]"
                type="checkbox"
                name="mains"
                value="Roast Vegetable Wellington"
                checked={formData.mains.includes("Roast Vegetable Wellington")}
                onChange={handleCheckboxChange}
              />
            </label>
          </label>
        </div>

        <br />
        <br />

        {/* Desserts */}

        <label className="text-lg italic">
          <h2 className="text-xl font-semibold text-center my-3">Desserts</h2>

          <label className="italic">
            Profiteroles with chocolate sauce
            <input
              className="align-middle ml-2 my-[12px]"
              type="checkbox"
              name="desserts"
              value="Profiteroles with Chocolate Sauce"
              checked={formData.desserts.includes(
                "Profiteroles with Chocolate Sauce"
              )}
              onChange={handleCheckboxChange}
            />
          </label>
          <br />
          <label className="italic">
            Apple crumb with custard
            <input
              className="align-middle ml-2 my-[12px]"
              type="checkbox"
              name="desserts"
              value="Apple Crumb with Custard"
              checked={formData.desserts.includes("Apple Crumb with Custard")}
              onChange={handleCheckboxChange}
            />
          </label>
          <br />
          <div className="flex">
            <label className="italic">
              Trio of desserts
              <input
                className="align-middle ml-2 my-[12px]"
                type="checkbox"
                name="desserts"
                value="Trio of Desserts"
                checked={formData.desserts.includes("Trio of Desserts")}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
        </label>
        <div className="flex  justify-center my-5">
          <button
            className="px-5 py-2 bg-[#529864] text-lg font-bold mb-3 text-white rounded-lg font-sans border-2 border-[#C4F6D1]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
