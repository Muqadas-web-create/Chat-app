// import Login from "./pages/Login"; // Change 'login' to 'Login'
// import Nav from "./Components/Nav"; // Ensure casing matches actual file name
// import Chat from "./pages/chat"; // Ensure casing matches actual file name
// import { Routes, Route } from "react-router-dom";
// import { PrivateRoute } from "./Routes/PrivateRoute";

// function App() {
//   return (
//     <AuthProvider>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route
//           path="/Chat"
//           element={
//             <PrivateRoute>
//               <Chat />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </AuthProvider>
//   );
// }
// export default App;
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
// import { PrivateRoute } from "./Routes/PrivateRoute";
// import Login from "./pages/Login";
// import Nav from "./Components/Nav";
// import Chat from "./pages/chat"; // Ensure casing matches actual file name

// function App() {
//   return (
//     <AuthProvider> {/* Wrap the entire app with AuthProvider */}
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route
//           path="/chat"
//           element={
//             <PrivateRoute>
//               <Chat />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </AuthProvider>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import { PrivateRoute } from "./Routes/PrivateRoute";
import Login from "./pages/Login";
import Nav from "./Components/Nav";
import Chat from "./pages/chat"; // Ensure casing matches actual file name

function App() {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <AuthProvider> {/* Wrap the entire app with AuthProvider */}
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/chat" // Ensure casing matches actual route
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
