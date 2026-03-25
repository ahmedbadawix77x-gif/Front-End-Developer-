import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Departments from "./components/Departments";
import DepartmentPage from "./components/DepartmentPage";
import Features from "./components/Features";
import Videos from "./components/Videos";
import Testimonials from "./components/Testimonials";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Department } from "./types";

export default function App() {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top when department is selected
  useEffect(() => {
    if (selectedDept) {
      window.scrollTo(0, 0);
    }
  }, [selectedDept]);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Preloader />
      
      {!isLoading && (
        <AnimatePresence mode="wait">
          {!selectedDept ? (
            <div key="main-content">
              <Navbar />
              <main>
                <Hero />
                <Departments onSelect={setSelectedDept} />
                <Features />
                <Videos />
                <Leadership />
                <Testimonials />
                <Contact />
              </main>
              <Footer />
            </div>
          ) : (
            <div key="department-page">
              <Navbar />
              <DepartmentPage 
                dept={selectedDept} 
                onBack={() => setSelectedDept(null)} 
              />
              <Footer />
            </div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
