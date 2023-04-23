import React from "react";
import SessionProviderComponent from "components/SessionProviderComponent";
import "../src/styles/globals.css";
import AuthShowcase from "components/AuthShowcase";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProviderComponent>
        <body>
          <div className="flex flex-col">
            <div className="h-24 flex align-center justify-between border-solid border-black border-2">
              <div>
                CFB Draft App
              </div>
              <div>
                <AuthShowcase />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-32 border-solid border-black border-2">
                Your Leagues
              </div>
              <div className="contents">
                {children}
              </div>
            </div>
          </div>
        </body>
      </SessionProviderComponent>
    </html>
  );
}
