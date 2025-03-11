import React from 'react';
import Home from './Pages/Home'; // Adjust path if needed
import Navbar from './Components/Navbar';

function App() {
  

  return (
    <div>
    
      <Home/>
    </div>
  );
}

export default App;



// import "./App.css";
 
// import Navbar from "./Components/Navbar";
//  import Login from "./Components/Login";
//  import Home from "./Components/Home.jsx";
//  import Signup from "./Components/Signup";
//  import Dashboard from "./Components/Dashboard";
//  import PrivateRoute from "./Components/PrivateRoute";
//  import { Route, Routes } from "react-router-dom";
//  import React, { useState } from "react";



// const App = () => {

//   const[isLoggedIn,setIsLoggedIn]=useState(false);
//   return (
//     <div className="w-screen h-[100vh] bg-richblack-900 flex flex-col">
//       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    
//       <Routes>
//         <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}> </Route>
//         <Route path="/login" element ={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
//         <Route path="/signup" element ={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
//         <Route path="/dashboard" element ={
//           <PrivateRoute isLoggedIn={isLoggedIn}> <Dashboard/> </PrivateRoute>
//           }></Route>

        
//       </Routes>
//     </div>
//   )
// }

// export default App





// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
//       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/login"
//           element={<Login setIsLoggedIn={setIsLoggedIn} />}
//         />
//         <Route
//           path="/signup"
//           element={<Signup setIsLoggedIn={setIsLoggedIn} />}
//         />
//         <PrivateRoute isLoggedIn={isLoggedIn}>
//           <Route path="/dashboard" element={<Dashboard />} />
//         </PrivateRoute>
//       </Routes>
//     </div>
//   );
// }

// export default App;
