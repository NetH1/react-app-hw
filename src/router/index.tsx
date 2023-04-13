import React from "react";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from "../HomePage";
import { AboutPage } from "../AboutPage";
import { NewsPage } from "../NewsPage";

interface RouterProps {}

export const Router: React.FC<RouterProps> = () => {
  return (
    <div>
        <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
    </div>
  );
};
