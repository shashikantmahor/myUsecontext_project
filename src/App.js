import "./App.css";
import { Stack } from "@mui/material";
import Index from "./routes";
import AuthProvider from "./store/authContext/AuthProvider";
import MSnackbar from "./common/MSnackbar";

function App() {
  return (
    <>
      <AuthProvider>
        <Stack sx={{ backgroundColor: "white" }}>
          <Index />
          <MSnackbar />
        </Stack>
      </AuthProvider>
    </>
  );
}

export default App;
