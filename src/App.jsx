import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar.jsx";
import Dashboard from "./scenes/dashboard/Dashboard.jsx";
import Sidebar from "./scenes/global/Sidebar.jsx";
import Team from "./scenes/team/Team.jsx";
import Contacts from "./scenes/contacts/Contacts.jsx";
import Invoices from "./scenes/invoice/Invoices.jsx";
import Form from "./scenes/form/Form.jsx";
import Calendar from "./scenes/calendar/Calendar.jsx";
import Faq from "./scenes/faq/Faq.jsx";
import Bar from "./scenes/bar/Bar.jsx";
import Pie from "./scenes/pie/pie.jsx";
import Line from "./scenes/line/Line.jsx";
import Geography from "./scenes/geography/Geography.jsx";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <div className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/bar-chart" element={<Bar />} />
                <Route path="/pie-chart" element={<Pie />} />
                <Route path="/line-chart" element={<Line />} />
                <Route path="/geography-chart" element={<Geography />} />
              </Routes>
            </div>
          </div >
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
