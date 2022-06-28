import { Navigate, Route, Routes } from "react-router-dom";
import { Create } from "../components/Create";
import { Set } from "../components/Set";
import { Workout } from "../components/Workout";
import { Home } from "../container/Home";

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout/:id" element={<Workout />} />
        <Route path="/workout/:id/set/:setId" element={<Set />} />
        <Route path="/create-workout" element={<Create />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
