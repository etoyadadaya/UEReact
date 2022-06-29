import React, {FC, lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
const Home = lazy(() => import("./Home"));


const AppRouter: FC = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
