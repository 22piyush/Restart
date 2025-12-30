import Countdown from "./components/Countdown";
import FormHandling from "./components/FormHandling";
import FormValidation from "./components/FormValidation";
import Props from "./components/Props";
import SimpleForm from "./components/SimpleForm";
import Todo from "./components/Todo";
import UncontrolledCom from "./components/UncontrolledCom";
import UseActionState from "./hooks/UseActionState";
import UseCallback from "./hooks/UseCallback";
import UseEffect from "./hooks/UseEffect";
import UseMemo from "./hooks/UseMemo";
import UseState from "./hooks/useState";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import UserDetail from "./pages/UserDetail";

function App() {

  function User() {
    const userData = [
      { id: 1, name: "Abhijit" },
      { id: 2, name: "Piyush" },
      { id: 3, name: "Harshal" },
      { id: 4, name: "Dev" },
      { id: 5, name: "Arth" },
    ];

    return (
      <div>
        <h2>User List</h2>

        {userData.map((item) => (
          <div key={item.id}>
            <Link to={`/user/${item.id}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    );
  }

  function Header() {
    return (
      <div>
        <h1>React Router Example</h1>
        <nav>
          <Link to={"/"}>Home</Link> |<Link to={"in/user/about"}>About</Link> |
          <Link to={"/contact"}>Contact</Link> |
          <Link to={"/products"}>Products</Link> |<Link to="/user">User</Link>
        </nav>
        <Outlet />
      </div>
    );
  }

  function NotFound() {
    return <h2>404 - Page Not Found</h2>;
  }

  return (
    <>
      {/* <UseActionState/>
     <UseCallback/>
     <UseMemo/> 



     <div>
         <Props fruit={fruit} newName={newName}/>
     </div> */}

      {/* <Countdown/> */}

      {/* <UseState/> */}

      {/* <FormHandling/> */}
      {/* <SimpleForm/> */}

      {/* <UncontrolledCom/> */}

      {/* <FormValidation/> */}

      {/* <Todo/> */}

      {/* <UseEffect/> */}

      {/* ROUTING  */}

      <BrowserRouter>
        <Routes>
          {/* Show Inside Header  */}
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />

            {/* Prefix  */}
            <Route path="in">
              <Route path="/in/user">
                <Route path="/in/user/about" element={<About />} />
              </Route>
            </Route>

            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/:id" element={<UserDetail />} />
          </Route>

          {/* Without Header with Content first selected  */}
          <Route path="/products" element={<Products />}>
            <Route index element={<FormHandling />} />
            <Route path="countdown" element={<Countdown />} />
          </Route>

          {/* 404 Page  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
