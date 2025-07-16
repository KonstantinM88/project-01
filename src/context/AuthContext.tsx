import { createContext } from "react";
import type { User } from "../types/types";


interface AuthContextType {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  isAuthorized?: boolean;
  setIsAuthorized: (isAuthorized: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// import { createContext } from "react";
// import type { User } from "../types/types";
// import React from "react";


// interface AuthContextType {
//   user: User | undefined;
//   setUser: (user: User | undefined) => void;
// }

// export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = React.useState<User | undefined>(undefined);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }