import "./globals.css"
import clsx from "clsx"
import NavigationBar from "@/components/NavigationBar"

export const metadata = {
  title: "Gatxs Helps Gatxs",
  description: "a community app for new people in Leipzig",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
          <NavigationBar />
        </div>
      </body>
    </html>
  )
}
