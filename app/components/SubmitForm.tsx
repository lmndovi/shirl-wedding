import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type FormSubmission = {
  "entry.380181804": string;
  "entry.765847282": string;
  "entry.1308268607": string;
  "entry.458145202": string;
  "entry.1655270632": string;
};

const submitForm = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const formData: FormSubmission = req.body;

    try {
      await axios({
        method: "post",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSducJZQOIWVXKSIcD9wtqZ1KmFbEJ01nHNH28fLGUCX5KV6cw/formResponse",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: new URLSearchParams(formData).toString(),
      });

      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Failed to submit the form", error);
      res.status(500).json({ message: "Failed to submit the form" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default submitForm;

// interface MyFormValues {
//   name: string;
//   rsvp: string[];
//   starter: string[];
//   main: string[];
//   dessert: string[];
// }

// export const submitForm = async (formData: MyFormValues) => {
//   try {
//     // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form submission endpoint
//     const url =
//       "https://docs.google.com/forms/d/e/1FAIpQLScXbqGmV0GI07WJvthXzanWuKaWOlNDDj2tx3zPdFpXa3BgwA/formResponse";

//     // Build the form data to be submitted
//     const bodyFormData = new FormData();

//     bodyFormData.append("entry.475477763", formData.name);
//     // Replace 'entry.1234567890' with the actual entry ID for the 'Name' field in your Google Form

//     formData.rsvp.forEach((option) => {
//       bodyFormData.append("entry.956938607", option);
//       // Replace 'entry.2345678901' with the actual entry ID for the 'RSVP' field in your Google Form
//     });

//     formData.starter.forEach((option) => {
//       bodyFormData.append("entry.1477965653", option);
//       // Replace 'entry.2345678901' with the actual entry ID for the 'Starter' field in your Google Form
//     });

//     formData.main.forEach((option) => {
//       bodyFormData.append("entry.711673005", option);
//       // Replace 'entry.3456789012' with the actual entry ID for the 'Main Course' field in your Google Form
//     });

//     formData.dessert.forEach((option) => {
//       bodyFormData.append("entry.1175346112", option);
//       // Replace 'entry.3456789012' with the actual entry ID for the 'Dessert' field in your Google Form
//     });

//     // Make the POST request to submit the form data to the Google Form
//     await axios.post(url, bodyFormData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     // Return true to indicate successful form submission
//     return true;
//   } catch (error) {
//     console.error("Error submitting form:", error);
//     // Return false or throw an error to indicate form submission failure
//     return false;
//   }
// };
