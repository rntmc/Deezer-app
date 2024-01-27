export const metadata = {
  title: "Deezer-app",
  description: "Your favorite music app",
};

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout