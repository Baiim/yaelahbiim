import { Button } from "@chakra-ui/react"
import { HiOutlineArrowNarrowDown } from "@react-icons/all-files/hi/HiOutlineArrowNarrowDown"

const ScrollIdButton = ({ text, id }: any) => {
  const scrollTo = (id: any) => {
    ;(document.querySelector(`#${id}`) as HTMLInputElement).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

  return (
    <Button
      display='inline'
      rightIcon={<HiOutlineArrowNarrowDown />}
      colorScheme='hakka'
      variant='link'
      onClick={() => scrollTo(id)}
    >
      {text}
    </Button>
  )
}

export default ScrollIdButton
