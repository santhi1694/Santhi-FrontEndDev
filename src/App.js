import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import MainLayout from "./components/MainLayout";
import AppContext from "./context/AppContext";
function App() {
  const [userToken, setUserToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getToken = () => {
      fetch("http://localhost:8000/getToken")
        .then((resp) => {
          return resp.json();
        })
        .then((token) => {
          console.log("token", token);
          setUserToken(token);
          setIsLoading(false);
        });
    };
    // getToken();
  }, []);
  if (isLoading) {
    return <Spin />;
  }
  return (
    <AppContext.Provider value={{ userToken }}>
      <div className="App">
        <MainLayout />
      </div>
    </AppContext.Provider>
  );
}

export default App;
