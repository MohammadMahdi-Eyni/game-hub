import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
function GameCardContainer({ children }: Props) {
  return (
    <Box width={"330px"} borderRadius={"10px"} overflow={"hidden"}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
