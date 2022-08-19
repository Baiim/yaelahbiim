import React, { Children } from "react"
import "../styles/globals.css"
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode
} from "@chakra-ui/react"
import { Global, css } from "@emotion/react"
import type { AppProps } from "next/app"
import { prismLightTheme, prismDarkTheme } from "../styles/prism"
import MainLayout from "../components/main-layout"
import theme from "../theme"
import Command from "../components/command"
import CommandProvider from "../components/providers/command-provider"
import { AnimatePresence } from "framer-motion"

const GlobalStyle = ({ children }: { [key: string]: any }) => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #ecf3f4;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #ecf3f4;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light"
              ? "rgb(253, 253, 255)"
              : "rgb(45, 49, 66)"};
          }
        `}
      />
      {children}
    </>
  )
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommandProvider>
      <ChakraProvider theme={theme}>
        <ColorModeProvider
          options={{
            initialColorMode: "light",
            useSystemColorMode: true
          }}
        >
          <MainLayout>
            <Command />
            <AnimatePresence exitBeforeEnter initial>
              <GlobalStyle>
                <Component {...pageProps} />
              </GlobalStyle>
            </AnimatePresence>
          </MainLayout>
        </ColorModeProvider>
      </ChakraProvider>
    </CommandProvider>
  )
}

export default MyApp
