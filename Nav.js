// import React from "react";
// import { UserAuth } from "./context/AuthContext";

// const Nav = () => {
//   const { currentUser, logout } = UserAuth();
//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="navbar bg-primary text-primary-content">
//       <div className=" container flex justify-between">
//       <a href="/" className="btn btn-ghost text-xl">Strapi ChatRoom</a> // Provide a valid href value

//         {currentUser ? <button onClick={handleLogout}>Logout</button> : ""}
//       </div>
//     </div>
//   );
// };

// export default Nav;
import React from "react";
import { UserAuth } from "../context/AuthContext"; // Adjust the path accordingly

const Nav = () => {
  const { currentUser, logout } = UserAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="container flex justify-between">
        <a href="/" className="btn btn-ghost text-xl">Strapi ChatRoom</a> {/* Provide a valid href value */}

        {currentUser ? <button onClick={handleLogout}>Logout</button> : ""}
      </div>
    </div>
  );
};

export default Nav;
