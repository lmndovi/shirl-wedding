"use client";

import { useState } from "react";

type RsvpFormData = {
  name: string;
  starters: string[];
  // mains: string[];
  // desserts: string[];
  [key: string]: string | string[];
};

export default function RsvpForm() {
  const [formData, setFormData] = useState<RsvpFormData>({
    name: "",
    starters: [],
    // mains: [],
    // desserts: [],
  });

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
      console.log("RSVP submitted successfully!");
    } catch (error) {
      // Handle submission error
      console.error("Error submitting RSVP:", error);
    }
  };

  const getEntryKey = (key: string) => {
    // Map the form field name to the corresponding Google Forms entry key
    const entryKeys: Record<string, string> = {
      name: "29388653",
      starters: "2051004852",
      // mains: "461016866",
      // desserts: "294038248",
      // Add more fields as needed
    };

    return entryKeys[key];
  };

  return (
    <div>
      <h1>Will You Be Joining Us?</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name(s) of our fabulous guests:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        {/* Starters */}
        <label>
          <h2>Entrée</h2>
          <br />
          <label>
            Scottish Salmon with Beetroot & Granary Bread
            <input
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
          <label>
            Greek Meze with Shish Kebab
            <input
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
          <label>
            Homemade Soup (Carrot & Coriander Spicy Parsnip)
            <input
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
