import "./globals.css";
import "./scroll-bar.css";
import content from "./content.json";
import Link from "next/link";
// import localFont from "@next/font/dist/local";
import localFont from "@next/font/local";

const jollityFont = localFont({
  src: "./fonts/jollity.ttf",
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={"bg-black"}>
        <nav className="fixed bottom-32 -right-14 text-white -rotate-90 z-[90]">
          <ul className="gap-4 font-bold text-left">
            {content.navItems.map((item) => (
              <li key={item.name} className="">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
            <li>
              <a href="/Julian-Bustos-Web-Dev-Resume-July-2023.pdf" download>
                Resume
              </a>
            </li>
            <li>
              <a href={`mailto:${content.email}`} target="_blank">
                {content.email}
              </a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
