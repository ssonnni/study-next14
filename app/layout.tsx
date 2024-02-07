import { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: {
    //템플릿 %s 원하는 문자열이 들어감
    template: "%s | Next.js",
    //default 안정해주면 error남
    default: "Next.js14 STUDY",
  },
  description: "Generated by Next.js",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
