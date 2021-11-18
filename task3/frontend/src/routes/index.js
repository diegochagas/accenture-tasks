import React from "react";
import { Routes, Route } from 'react-router-dom';

import ProfileListingPage from '../pages/ProfileListingPage';
import ProfilePage from '../pages/ProfilePage';

export default function RoutesComponent() {

  return (
    <Routes>
      <Route path="/" exact element={<ProfileListingPage />} />
      <Route path="/profile-listing-page" element={<ProfileListingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
    </Routes>
  )
}