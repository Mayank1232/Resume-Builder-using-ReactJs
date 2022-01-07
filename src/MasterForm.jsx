// import React, { useState } from "react";
// import Form from "./Form";
// import Form1 from "./Form1";

// function MasterForm() {
//   const [step, setStep] = useState(1);

//   const [user, setUser] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     pno: "",
//     address: "",
//     Lurl: "",
//     Gurl: "",
//     education: "",
//   });

//   const handleNext = () => {
//     setStep((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     setStep((prev) => prev - 1);
//   };
//   const getCurrentFormSte = (step) => {
//     switch (step) {
//       case 1:
//         return (
//           <Form
//             step={step}
//             handleNext={handleNext}
//             user={user}
//             setUser={setUser}
//           />
//         );
//       case 2:
//         return (
//           <Form1 step={step} handleNext={handleNext} handlePrev={handlePrev} />
//         );
//     }
//   };

//   return <>{getCurrentFormSte(step)}</>;
// }

// export default MasterForm;
