import { useState, type ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";
import type { User } from "../types/types";


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
