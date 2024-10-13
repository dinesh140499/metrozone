import { Button } from '@chakra-ui/react'
import React from 'react'

const MyButton = ({ text, myBg, myColor,icon,myFun }) => {
  const option = {
    bgColor: myBg || "#D74947",
    color: myColor || "white",
    padding:"10px 20px",
  }

  return (
    <Button {...option} _hover={{bg: "#D74947"}} _active={{ bg: "#D74947" }} onClick={myFun}>
      {icon}&nbsp;{text}
    </Button>
  )
}

export default MyButton