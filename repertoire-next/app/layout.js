import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
  title: 'Marcel-Pierre Samuels',
  description: 'Personal Portfolio - Computer Science Graduate & Software Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@500;700&family=Muli:ital,wght@0,400;0,800;1,400;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
      </head>
      <body className="pt-[54px] lg:pt-0 lg:pl-[17rem]">
        <Nav />
        {children}
      </body>
    </html>
  )
}
