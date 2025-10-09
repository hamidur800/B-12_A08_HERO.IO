// import React, { Component } from "react";
// import Footer from "../../components/Footer/Footer";
// import { Outlet } from "react-router";
// import Header from "../../components/Header/Header";

// export class Root extends Component {
//   render() {
//     return (
//       <div>
//         <Header></Header>
//         <Outlet></Outlet>
//         <Footer></Footer>
//       </div>
//     );
//   }
// }

// export default Root;
import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import Header from "../../components/Header/Header";

// Wrapper to handle loading effect
function LoadingWrapper() {
  const navigation = useNavigation();

  return (
    <div className="">
      <Header />

      {/* Loading effect */}
      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center py-20 ">
          <div className="text-6xl">
            <span>loading </span>
            <span className="loading loading-dots loading-xl"></span>
          </div>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
}

export class Root extends Component {
  render() {
    return <LoadingWrapper />;
  }
}

export default Root;
