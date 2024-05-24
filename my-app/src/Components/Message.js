// import React from "react";
// const Message = ({ message }) => {
//   return (
//     <div>
//       <div className="chat chat-start">
//         <div className="chat-image avatar">
//           <div className="w-10 rounded-full">
//             <img alt="User Avatar" src="" />
//           </div>
//         </div>
//         <div className="chat-header">{message.name}</div>
//         <div className="chat-bubble">{message.text}</div>
//       </div>
//     </div>
//   );
// };
// export default Message;

import React from "react";
import { UserAuth } from "../context/AuthContext";
const Message = ({ message }) => {
  const { currentUser } = UserAuth();
  return (
    <div>
      <div
        className={`chat ${
          message.attributes.User === currentUser.displayName
            ? "chat-start"
            : "chat-end"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="User Avatar" src={message.attributes.Photo} />
          </div>
        </div>
        <div className="chat-header">{message.attributes.User}</div>
        <div className="chat-bubble">{message.attributes.message}</div>
      </div>
    </div>
  );
};
export default Message;