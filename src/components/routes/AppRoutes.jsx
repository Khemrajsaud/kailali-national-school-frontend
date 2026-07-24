import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "../layout/Layout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Admission from "../../pages/Admission";
import Academics from "../../pages/Academics";
import PrimaryProgram from "../../pages/PrimaryProgram";
import SecondaryProgram from "../../pages/SecondaryProgram";
import Contact from "../../pages/Contact";
import Map from "../../pages/Map";
import Facilities from "../../pages/Facilities";
import Rules from "../../pages/Rules";
import ResourceGallery from "../../pages/ResourceGallery";
import ResourceNews from "../../pages/ResourceNews";
import PrincipleMessage from "../../pages/PrincipleMessage";
import ChairmanMessage from "../../pages/ChairmanMessage";
import BoardOfDirectors from "../../pages/BoardOfDirectors";
import AdminDashboard from "../../pages/admin/AdminDashboard";
import AdminLayout from "../layout/AdminLayout";
import AdminGallery from "../../pages/admin/AdminGallery";
import AdminNews from "../../pages/admin/AdminNews";
import AdminNotices from "../../pages/admin/AdminNotices";
import AdminLogin from "../../pages/admin/AdminLogin";
import { PublicAdminRoute, RequireAdminAuth } from "../../contexts/AdminAuthContext";
import ResourcesNotice from "../../pages/ResourcesNotice";
import DetailedNews from "../../pages/DetailedNews";
import NotFound from "../../pages/NotFound";
import AnimatedPage from "../ui/AnimatedPage";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="/admission" element={<AnimatedPage><Admission /></AnimatedPage>} />
          <Route path="/academic" element={<AnimatedPage><Academics /></AnimatedPage>} />
          <Route path="/academic/primary" element={<AnimatedPage><PrimaryProgram /></AnimatedPage>} />
          <Route path="/academic/secondary" element={<AnimatedPage><SecondaryProgram /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path="/map" element={<AnimatedPage><Map /></AnimatedPage>} />
          <Route path="/facilities" element={<AnimatedPage><Facilities /></AnimatedPage>} />
          <Route path="/rules" element={<AnimatedPage><Rules /></AnimatedPage>} />
          <Route path="/resources/gallery" element={<AnimatedPage><ResourceGallery /></AnimatedPage>} />
          <Route path="/resources/news" element={<AnimatedPage><ResourceNews /></AnimatedPage>} />
          <Route path="/history" element={<AnimatedPage><PrincipleMessage /></AnimatedPage>} />
          <Route path="/chairman-message" element={<AnimatedPage><ChairmanMessage /></AnimatedPage>} />
          <Route path="/team" element={<AnimatedPage><BoardOfDirectors /></AnimatedPage>} />
          <Route path="/resources/notices" element={<AnimatedPage><ResourcesNotice /></AnimatedPage>} />
          <Route path="/news/:id" element={<AnimatedPage><DetailedNews /></AnimatedPage>} />
          <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
        </Route>

        <Route element={<PublicAdminRoute />}>
          <Route path="/admin/login" element={<AnimatedPage><AdminLogin /></AnimatedPage>} />
        </Route>

        <Route element={<RequireAdminAuth />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="news" element={<AdminNews />} />
            <Route path="notices" element={<AdminNotices />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
