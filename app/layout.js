import { montserrat } from "./ui/Fonts";
import Main from "./ui/Main";
import "./style/style.css";

export const metadata = {
  title: "Sparkle Electric",
  description: "Proudly serving our service since 1981! Call us today!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Main>

          {/* all the content inside Main.js will be injected here */}
          {children}

        </Main>
      </body>
    </html>
  );
}
