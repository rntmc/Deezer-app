export const metadata = {
  title: "Deezer-app",
  description: "Your favorite music app",
};

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="../assets/icons8-audio-wave.gif" />
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout