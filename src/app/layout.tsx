import "./globals.css";
import { ReactNode } from "react";
import Header from "@/app/components/layout/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="ja">
        <body>
          <Header />
          <main
            style={{ background: "#F1F3F7", width: "100%", height: "100vh" }}
          >
            {children}
          </main>
        </body>
      </html>
    </>
  );
}
