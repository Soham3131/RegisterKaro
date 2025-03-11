// import React from 'react';
// import form from "../assets/form.png";
// import payment from "../assets/payment.png";
// import executive from "../assets/executive.png";
// import email from "../assets/email.png";

// const Options = () => {
//   return (
//     <div className='w-full h-[154px]  bg-[#F99C23] flex items-center justify-center'>
//       <div className='w-[1303px] h-[52px] flex items-center justify-between px-[10px]'>

//         {/* Step 1 */}
//         <div className='flex items-center gap-2'>
//           <div className='w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#EB5757]'>
//             <img src={form} alt="Form Icon" className='w-[24px] h-[24px]' />
//           </div>
//           <p className='text-black font-medium'>Fill up Application Form</p>
//         </div>

//         {/* Step 2 */}
//         <div className='flex items-center gap-2'>
//           <div className='w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#27AE60]'>
//             <img src={payment} alt="Payment Icon" className='w-[24px] h-[24px]' />
//           </div>
//           <p className='text-black font-medium'>Make Online Payment</p>
//         </div>

//         {/* Step 3 */}
//         <div className='flex items-center gap-2'>
//           <div className='w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#F2994A]'>
//             <img src={executive} alt="Process Icon" className='w-[24px] h-[24px]' />
//           </div>
//           <p className='text-black font-medium'>Executive will Process Application</p>
//         </div>

        
//         <div className='flex items-center gap-2'>
//           <div className='w-[52px] h-[52px] flex items-center justify-center  '>
//             <img src={email} alt="Mail Icon"  />
//           </div>
//           <p className='text-black font-medium'>Get Confirm Mail</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Options;

import React from 'react';
import form from "../assets/form.png";
import payment from "../assets/payment.png";
import executive from "../assets/executive.png";
import email from "../assets/email.png";

const Options = () => {
  return (
    <div className="w-full h-auto lg:h-[154px] bg-[#F99C23] flex items-center justify-center py-4 lg:py-0 px-4">
      <div className="w-full lg:w-[1303px] flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-4">
        
        {/* Step 1 */}
        <div className="flex items-center gap-2">
          <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#EB5757]">
            <img src={form} alt="Form Icon" className="w-[24px] h-[24px]" loading="lazy" />
          </div>
          <p className="text-black font-medium text-sm sm:text-base">Fill up Application Form</p>
        </div>

        {/* Step 2 */}
        <div className="flex items-center gap-2">
          <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#27AE60]">
            <img src={payment} alt="Payment Icon" className="w-[24px] h-[24px]" loading="lazy" />
          </div>
          <p className="text-black font-medium text-sm sm:text-base">Make Online Payment</p>
        </div>

        {/* Step 3 */}
        <div className="flex items-center gap-2">
          <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#F2994A]">
            <img src={executive} alt="Process Icon" className="w-[24px] h-[24px]" loading="lazy" />
          </div>
          <p className="text-black font-medium text-sm sm:text-base">Executive will Process Application</p>
        </div>

        {/* Step 4 */}
        <div className="flex items-center gap-2">
          <div className="w-[52px] h-[52px] flex items-center justify-center">
            <img src={email} alt="Mail Icon" className="w-[52px] h-[52px]" loading="lazy" />
          </div>
          <p className="text-black font-medium text-sm sm:text-base">Get Confirm Mail</p>
        </div>

      </div>
    </div>
  );
};

export default Options;
