// import React from "react";

// const Contact = () => {
//   return (
//     <div>
//       <a href='https://www.linkedin.com/in/hilary-yates/'>LinkedIn</a>
//     </div>
//   );
// };

// export default Contact;
import React from "react";

export const ContactSection: React.FC = () => {
  return (
    <div className='flex flex-col items-end justify-center mr-96 pb-10  h-full'>
      <a target='_blank' href='https://www.linkedin.com/in/hilary-yates/'>
        LinkedIn
      </a>
      <a
        target='_blank'
        href='https://mail.google.com/mail/u/0/?fs=1&to=hilaryrobertayates@gmail.com&su=&body=&tf=cm'
      >
        hilaryrobertayates@gmail.com
      </a>
    </div>
  );
};
