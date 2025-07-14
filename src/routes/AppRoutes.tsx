import { Routes, Route } from "react-router-dom";
import { AgePredictor } from "../components/AgePredictor/AgePredictor";
import { Counter } from "../components/Counter/Counter";
import { GenderPredictor } from "../components/GenderPredictor/GenderPredictor";
import BuyPony from "../components/pony/BuyPony/BuyPony";
import MyPony from "../components/pony/MyPony/MyPony";
import { ACCOUNT_ROUTES, ROUTES } from "../constants/routes";
import { MainLayout } from "../layout/MainLayout";
import { PonyLayout } from "../layout/PonyLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Registration from "../pages/Registration/Registration";
import About from "../pages/About/About";
// import { AccountLayout } from "../layout/AccountLayout";
import AccountSettings from "../components/AccountSettings/AccountSettings";
import AccountInfo from "../components/AccountInfo/AccountInfo";
// import { ProductsList } from "../components/ProductsList/ProductsList";
import ProductPage from "../pages/ProductPage/ProductPage";
import { UsersPage } from "../pages/UsersPage/UsersPage";
import { UserPage } from "../pages/UserPage/UserPage";
import Login from "../pages/Login/Login";
import { ProductsList } from "../components/ProductList/ProductList";
import { AccountLayout } from "../layout/AccoutLayout";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.GENDER_PREDICTOR} element={<GenderPredictor />} />
          <Route path="/age-predictor" element={<AgePredictor />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/pony" element={<PonyLayout />}>
            <Route path="/pony/my-pony" element={<MyPony />} />
            <Route path="/pony/buy-pony" element={<BuyPony />} />
          </Route>
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={"/products"} element={<ProductsList />} />
          <Route path={"/products/:id"} element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path={ROUTES.ACCOUNT} element={<AccountLayout />}>
            <Route
              path={ACCOUNT_ROUTES.ACCOUNT_INFO}
              element={<AccountSettings />}
            />
            <Route
              path={ACCOUNT_ROUTES.ACCOUNT_SETTINGS}
              element={<AccountInfo />}
            />
          </Route>
          <Route path={ROUTES.USERS} element={<UsersPage />} />
          <Route path={ROUTES.USERS + "/:id"} element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
}

// import { ROUTES } from "../constants/routes";
// import { MainLayout } from "../layout/MainLayout";
// import { AgePredictor } from "../components/AgePredictor/AgePredictor";
// import { Counter } from "../components/Counter/Counter";
// import GenderPredictor from "../components/GenderPredictor/GenderPredictor";
// // import AboutUs from "../pages/AboutUs/AboutUs";
// // import Contacts from "../pages/Contacts/Contacts";
// import Home from "../pages/Home/Home";
// import NotFound from "../pages/NotFound/NotFound";
// import Registration from "../pages/Registration/Registration";
// import { Route, Routes } from "react-router-dom";
// import AccountLayout from "../components/layout/AccountLayout";
// import { ProductsList } from "../components/ProductList/ProductList";
// // import BuyPony from "../components/pony/BuyPony/BuyPony";
// // import MyPony from "../components/pony/MyPony/MyPony";
// // import { PonyLayout } from "../layout/PonyLayout";

// export default function AppRoutes() {
//   return (
//     <div>
//     <Routes>
//         <Route path={ROUTES.HOME} element={<MainLayout/>}>
//         <Route index element={<Home/>}/>
//         <Route path={ROUTES.REGISTRATION} element={<Registration/>}/>
//         <Route path={ROUTES.GENDER_PREDICTOR} element={<GenderPredictor/>}/>
//         <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor/>}/>
//         <Route path={ROUTES.COUNTER} element={<Counter/>}/>
//         <Route path={"/products"} element={<ProductsList />} />
//         {/* <Route path="/pony" element={<PonyLayout />}>
//               <Route path="/pony/my-pony" element={<MyPony />} />
//               <Route path="/pony/buy-pony" element={<BuyPony />} /> */}
//         {/* <Route path={ROUTES.ABOUT} element={<AboutUs/>}/>
//         <Route path={ROUTES.CONTACTS} element={<Contacts/>}/> */}
//         <Route path="*" element={<NotFound/>}/>
//         <Route path="/account" element={<AccountLayout />}/>

//       </Route>
//     </Routes>
//     </div>
//   )
// }
