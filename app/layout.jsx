
export const metadata = {
  title: "Deezer-app",
  description: "Your favorite music app",
};

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <h1>My Deezer</h1>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout