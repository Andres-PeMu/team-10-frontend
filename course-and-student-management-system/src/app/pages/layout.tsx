import { ReactNode } from "react";
import Header from "../components/Header";

interface Props {
    children: ReactNode;
  }
  
  export default function Layout({ children }: Props) {
    return (
      <>
        <main>{children}</main>
      </>
    );
  }