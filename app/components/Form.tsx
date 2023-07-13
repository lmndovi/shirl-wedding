// "use client";

// // import { useRouter } from "next/navigation";
// // import { ChangeEvent, FormEvent, useState } from "react";
// // import { submitForm } from "./SubmitForm";
// // import NotFound from "../submission-complete/not-found";

// // interface MyFormValues {
// //   name: string;
// //   rsvp: string[];
// //   starter: string[];
// //   main: string[];
// //   dessert: string[];
// //   [key: string]: string | string[]; // Index signature for dynamic property access
// // }

// // function Form() {
// //   const [formData, setFormData] = useState<MyFormValues>({
// //     name: "",
// //     rsvp: [],
// //     starter: [],
// //     main: [],
// //     dessert: [],
// //   });

// //   const router = useRouter();

// //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// //     const { name, value, checked } = e.target;

// //     if (checked) {
// //       setFormData((prevFormData) => ({
// //         ...prevFormData,
// //         [name]: [...prevFormData[name as keyof MyFormValues], value],
// //       }));
// //     } else {
// //       setFormData((prevFormData) => ({
// //         ...prevFormData,
// //         [name]: (prevFormData[name] as string[]).filter(
// //           (option) => option !== value
// //         ),
// //       }));
// //     }
// //   };

// //   const handleSubmit = async (e: FormEvent) => {
// //     e.preventDefault();

// //     try {
// //       const formSubmitted = await submitForm(formData);
// //       if (formSubmitted) {
// //         console.log("Form submitted successfully!");
// //         // Redirect to the submission complete page
// //         router.push("/submission-complete");
// //       } else {
// //         console.log("Form submission failed!");
// //         // Redirect to the error page
// //         router.push("/submission-complete/error");
// //       }
// //     } catch (error) {
// //       console.error("Error submitting form:", error);
// //       // Redirect to the error page
// //       router.push("/submission-complete/error");
// //     }
// //   };

// //   return (
// //     <div className=" mt-20">
// //       {/* Connected to Google Form backend */}
// //       <form
// //         // action="https://docs.google.com/forms/d/e/1FAIpQLScXbqGmV0GI07WJvthXzanWuKaWOlNDDj2tx3zPdFpXa3BgwA/formResponse"
// //         onSubmit={handleSubmit}
// //       >
// //         {/* RSVP */}
// //         <h1>Will You Be Joining Us?</h1>
// //         <div>
// //           <label htmlFor="entry.475477763">
// //             Name(s) of our fabulous guests:{" "}
// //           </label>
// //           <input type="text" name="entry.475477763" placeholder="John Doe" />
// //         </div>
// //         <div>
// //           <div>
// //             <label htmlFor="entry.956938607">Gracefully Accept</label>
// //             <input type="checkbox" name="entry.956938607" id="1" />
// //           </div>
// //           <div>
// //             <label htmlFor="entry.956938607">Regretfully Decline</label>
// //             <input type="checkbox" name="entry.956938607" id="2" />
// //           </div>
// //         </div>
// //         <div>
// //           <div>
// //             <h1>Food Preferences</h1>

// //             {/* Starter */}

// //             <div>
// //               <label htmlFor="entry.1477965653">
// //                 <h2>Scottish Salmon with Beetroot & Granary Bread</h2>
// //               </label>
// //               <input type="checkbox" name="entry.1477965653" />
// //               <label htmlFor="entry.1477965653">
// //                 <h2>Greek Meze with Shish Kebab</h2>
// //               </label>
// //               <input type="checkbox" name="entry.1477965653" />
// //               <label htmlFor="entry.1477965653">
// //                 <h2>Homemade Soup (Carrot & Coriander Spicy Parsnip)</h2>
// //               </label>
// //               <input type="checkbox" name="entry.1477965653" />
// //             </div>

// //             {/* Main */}

// //             <div>
// //               <label htmlFor="entry.711673005">
// //                 <h2>
// //                   Chargrilled Breast of Chicken served with Roast Mediterranean
// //                   Vegetables, Dauphinois Potatoes and a Tangy Tomato Sauce
// //                 </h2>
// //               </label>
// //               <input type="checkbox" name="entry.711673005" />
// //               <label htmlFor="entry.711673005">
// //                 <h2>
// //                   Rump of Lamb or Lamb Shank with Fondant Potato, Swede, Carrot
// //                   Purée and Grilled Vegetables with a Mint Jus
// //                 </h2>
// //               </label>
// //               <input type="checkbox" name="entry.711673005" />
// //               <label htmlFor="entry.711673005">
// //                 <h2>
// //                   Roasted Sea Bass with Provençals of Vegetables, a Red Pepper
// //                   Sauce and Roasted New Potatoes
// //                 </h2>
// //               </label>
// //               <input type="checkbox" name="entry.711673005" />
// //               <h1>Vegetarian Main</h1>
// //               <label htmlFor="entry.711673005">
// //                 <h2>Roast Vegetable Wellington</h2>
// //               </label>
// //               <input type="checkbox" name="entry.711673005" />
// //             </div>

// //             {/* Dessert */}

// //             <div>
// //               <label htmlFor="entry.1175346112">
// //                 <h2>Profiteroles with Chocolate Sauce</h2>
// //               </label>
// //               <input type="checkbox" name="entry.1175346112" />
// //               <label htmlFor="entry.1175346112">
// //                 <h2>Apple Crumb with Custard</h2>
// //               </label>
// //               <input type="checkbox" name="entry.1175346112" />
// //               <label htmlFor="entry.1175346112">
// //                 <h2>Trio of Desserts</h2>
// //               </label>
// //               <input type="checkbox" name="entry.1175346112" />
// //             </div>
// //           </div>
// //           <div className="flex justify-center">
// //             <button
// //               type="submit"
// //               className="bg-blue-500 text-white text-md  font-sans font-semibold rounded-lg px-5 py-2"
// //             >
// //               Submit
// //             </button>
// //           </div>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Form;

// // import { useState } from "react";

// // type RsvpFormProps = {
// //   onSubmit: (date: RsvpFormData) => void;
// // };

// // type RsvpFormData = {
// //   name: string;
// //   rsvp: string;
// //   starters: string;
// //   mainCourse: string;
// //   desserts: string;
// // };

// // export default function RsvpForm({ onSubmit }: RsvpFormProps) {
// //   const [formData, setFormData] = useState<RsvpFormData>({
// //     name: '',
// //     rsvp: [],
// //     starters: [],
// //     mainCourse: [],
// //     desserts: [],
// //   });

// //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value, checked, type } = event.target;

// //     setFormData((prevData) => {
// //       if (type === 'checkbox') {
// //         const prevArray = prevData[name] || [];
// //         const updatedArray = checked
// //           ? [...prevArray, value]
// //           : prevArray.filter((item) => item !== value);

// //         return { ...prevData, [name]: updatedArray };
// //       }

// //       return { ...prevData, [name]: value };
// //     });
// //   };

// //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();
// //     onSubmit(formData);
// //   };

// // // const Form = () => {
// // //   const [name, setName] = useState("");
// // //   const [rsvp, setRsvp] = useState<string[]>([]);
// // //   const [starters, setStarters] = useState<string[]>([]);
// // //   const [mainCourse, setMainCourse] = useState<string[]>([]);
// // //   const [desserts, setDesserts] = useState<string[]>([]);

// // //   const handleSubmit = async (event: React.FormEvent) => {
// // //     event.preventDefault();

// //   //   const formData = {
// //   //     "entry.380181804": name,
// //   //     "entry.765847282": rsvp.join(", "),
// //   //     "entry.1308268607": starters.join(", "),
// //   //     "entry.458145202": mainCourse.join(", "),
// //   //     "entry.1655270632": desserts.join(", "),
// //   //   };

// //   //   try {
// //   //     // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
// //   //     await axios.post(
// //   //       "https://docs.google.com/forms/d/e/1FAIpQLSducJZQOIWVXKSIcD9wtqZ1KmFbEJ01nHNH28fLGUCX5KV6cw/formResponse",
// //   //       formData
// //   //     );
// //   //     console.log("Form submitted successfully");
// //   //   } catch (error) {
// //   //     console.error("Failed to submit the form", error);
// //   //   }
// //   // };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label>
// //         Name:
// //         <input
// //           type="text"
// //           name="name"
// //           value={formData.name}
// //           onChange={handleChange}
// //         />
// //       </label>
// //       <br />
// //       <label>
// //         RSVP:
// //         <br />
// //         <input
// //           type="checkbox"
// //           name="rsvp"
// //           value="Option 1"
// //           checked={formData.rsvp.includes("Option 1")}
// //           onChange={handleChange}
// //         />
// //         Option 1
// //         <br />
// //         <input
// //           type="checkbox"
// //           name="rsvp"
// //           value="Option 2"
// //           checked={formData.rsvp.includes("Option 2")}
// //           onChange={handleChange}
// //         />
// //         Option 2
// //         <br />
// //         <input
// //           type="checkbox"
// //           name="rsvp"
// //           value="Option 3"
// //           checked={formData.rsvp.includes("Option 3")}
// //           onChange={handleChange}
// //         />
// //         Option 3
// //       </label>

// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // };

// // export default Form;

// // NEW FORM FROM HEREEEEEE

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";

// type RsvpFormData = {
//   name: string;
//   rsvp: string;
//   starters: string;
//   mainCourse: string;
//   desserts: string;
// };

// // export default function RsvpForm() {
// //   const [formData, setFormData] = useState<RsvpFormData>({
// //     name: "",
// //     rsvp: "",
// //     starters: "",
// //     mainCourse: "",
// //     desserts: "",
// //   });

// //   const router = useRouter();

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, checked, type } = event.target;

//     if (type === "checkbox") {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: checked ? value : "",
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = event.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

// //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();

// //     const googleFormsEndpoint =
// //       "https://docs.google.com/forms/d/e/1FAIpQLSducJZQOIWVXKSIcD9wtqZ1KmFbEJ01nHNH28fLGUCX5KV6cw/formResponse?usp=pp_url&"; // Replace with your Google Forms endpoint

// //     try {
// //       const formDataEncoded = new URLSearchParams();
// //       Object.entries(formData).forEach(([key, value]) => {
// //         formDataEncoded.append(`entry.${key}`, value);
// //       });

// //       await fetch(googleFormsEndpoint, {
// //         method: "POST",
// //         body: formDataEncoded,
// //       });

// //       // Redirect to a success page
// //       router.push("/rsvp/success");
// //     } catch (error) {
// //       // Handle submission error
// //       console.error("Error submitting RSVP:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Will You Be Joining Us?</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Name(s) of our fabulous guests:{" "}
// //           <input
// //             key="380181804"
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleInputChange}
// //           />
// //         </label>
// //         <br />

//         <label>
//           RSVP:
//           <select
//             name="rsvp"
//             value={formData.rsvp}
//             onChange={handleSelectChange}
//             required
//           >
//             <option value="">Select an option</option>
//             <option key="765847282" value="Yes">
//               Gracefully Accept
//             </option>
//             <option key="765847282" value="No">
//               Regretfully Decline
//             </option>
//           </select>
//         </label>
//         <br />

// //         <label>
// //           Starters:
// //           <br />
// //           <select
// //             name="starters"
// //             value={formData.starters}
// //             onChange={handleSelectChange}
// //             required
// //           >
// //             <option value="">Select an option</option>
// //             <option key="1308268607" value="Option 1">
// //               Scottish Salmon with Beetroot & Granary Bread
// //             </option>
// //             <option key="1308268607" value="Option 2">
// //               Greek Meze with Shish Kebab
// //             </option>
// //             <option key="1308268607" value="Option 3">
// //               Homemade Soup (Carrot & Coriander Spicy Parsnip)
// //             </option>
// //           </select>
// //         </label>
// //         <br />

// //         <label>
// //           Main Course:
// //           <select
// //             name="mainCourse"
// //             value={formData.mainCourse}
// //             onChange={handleSelectChange}
// //             required
// //           >
// //             <option value="">Select an option</option>
// //             <option key="458145202" value="Option 1">
// //               Chargrilled Breast of Chicken served with Roast Mediterranean
// //               Vegetables, Dauphinois Potatoes and a Tangy Tomato Sauce
// //             </option>
// //             <option key="458145202" value="Option 2">
// //               Rump of Lamb or Lamb Shank with Fondant Potato, Swede, Carrot
// //               Purée and Grilled Vegetables with a Mint Jus
// //             </option>
// //             <option key="458145202" value="Option 3">
// //               Roasted Sea Bass with Provençals of Vegetables, a Red Pepper Sauce
// //               and Roasted New Potatoes
// //             </option>
// //             <option key="458145202" value="Option 4">
// //               Roast Vegetable Wellington
// //             </option>
// //           </select>
// //         </label>
// //         <br />

// //         <label>
// //           Desserts:
// //           <br />
// //           <select
// //             name="desserts"
// //             value={formData.desserts}
// //             onChange={handleSelectChange}
// //             required
// //           >
// //             <option value="">Select an option</option>
// //             <option key="1655270632" value="Option 1">
// //               Profiteroles with Chocolate Sauce
// //             </option>
// //             <option key="1655270632" value="Option 2">
// //               Apple Crumb with Custard
// //             </option>
// //             <option key="1655270632" value="Option 3">
// //               Trio of Desserts
// //             </option>
// //           </select>
// //         </label>
// //         <br />

// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }
