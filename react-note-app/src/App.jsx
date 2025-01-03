import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AllNotes from "./pages/AllNotes/AllNotes";
import ArchiveNotes from "./pages/ArchiveNotes/ArchiveNotes";
import TrashNotes from "./pages/TrashNotes/TrashNotes";
import TagNotes from "./pages/TagNotes/TagNotes";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Sidebar from "./layout/Sidebar/Sidebar";
import Navbar from "./layout/Navbar/Navbar";
import "./App.css";
import TagsModal from "./components/Modal/TagsModal/TagsModal";
import { useSelector } from "react-redux";

function App() {
  const { viewEditTagsModal } = useSelector((state) => state.modal);
  return (
    <div className="app">
      {viewEditTagsModal && <TagsModal type="edit" />}
      <BrowserRouter>
        <Sidebar />
        <div className="app__container">
          <Navbar />
          <Routes>
            <Route path="/" element={<AllNotes />} />
            <Route path="/archive" element={<ArchiveNotes />} />
            <Route path="/trash" element={<TrashNotes />} />
            <Route path="/tag/:name" element={<TagNotes />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="/*" element={<Navigate to={"/404"} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
