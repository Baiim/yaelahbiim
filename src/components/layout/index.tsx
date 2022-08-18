import { Container, ContainerProps } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { NextSeo } from "next-seo"
import { PropsWithChildren } from "react"

type LayoutProps = PropsWithChildren<{ title: string; description: string }>

const variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 0.4, type: "easeInOut" }
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, type: "easeInOut" }
  },
  exit: {
    opacity: 0,
    x: -0,
    y: 40,
    transition: { duration: 0.4, type: "easeInOut" }
  }
}

const MotionContainer = motion<ContainerProps>(Container)

const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <>
      <NextSeo
        title={title + " | Sektiawan Bimo Prihpambudi"}
        description={description}
        twitter={{
          cardType: "summary_large_image",
          handle: "@yaelahbiim"
        }}
        openGraph={{
          url: "https://www.yaelahbiim.vercel.app",
          title: title + " | Sektiawan Bimo Prihpambudi",
          description: description,
          locale: "en_US",
          images: [
            {
              url: "/images/anime.jpg",
              width: 1200,
              height: 630,
              alt: "Sektiawan Bimo Prihpambudi",
              type: "image/png"
            }
          ]
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/anime.jpg"
          }
        ]}
      />
      <MotionContainer
        display='flex'
        maxW={{ base: "container.lg", xl: "container.xl" }}
        minH={{ base: "auto", md: "100vh" }}
        px={{ base: 4, lg: 0 }}
        overflow='hidden'
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        centerContent
      >
        {children}
      </MotionContainer>
    </>
  )
}

export default Layout
