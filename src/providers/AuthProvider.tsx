import { useEffect,useState, type ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";
import type { User } from "../types/types";


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();
  // const isAuthorized = Boolean(localStorage.getItem("isAuthorized"));
  const [isAuthorized, setIsAuthorized] = useState<boolean>(
    Boolean(localStorage.getItem("isAuthorized"))
  );

  async function fetchUser(access_token: string) {
    console.log("Fetch for profile");
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    const obj = await res.json();
    setUser(obj);
  }

  useEffect(() => {
    if (isAuthorized) {
      fetchUser(localStorage.getItem("accessToken") || "");
    }
  }, [isAuthorized]);


  return (
    <AuthContext.Provider value={{ user, setUser, isAuthorized, setIsAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};
