import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import BookingListPage from "./pages/BookingListPage";
import { Provider } from "react-redux";
import store from "./store";
import { AuthProvider } from "./components/AuthProvider";
import About from "./pages/AboutUs";

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/bookingpage" element={<BookingPage />} />
            <Route path="/bookinglist" element={<BookingListPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>

  );
}