import { ConfigProvider } from "antd";
import "./App.scss";
import Navigation from "./Components/Navbar";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#d01c28",
            borderRadius: 5,
          },
        }}
      >
        <Navigation />
      </ConfigProvider>
    </>
  );
}

export default App;
