import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Ocr from "./pages/Ocr";

// Clerk imports
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from "@clerk/clerk-react";

const App = () => {
  return (
    <ClerkProvider publishableKey="pk_live_Y2xlcmsub2NyLXNvbC5jb20k">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/extractor"
            element={
              <>
                <SignedIn>
                  <Ocr />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </Router>
    </ClerkProvider>
  );
};

export default App;

