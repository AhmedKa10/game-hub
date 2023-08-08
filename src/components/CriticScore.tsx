import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const criticScore = ({ score }: Props) => {
  let color = score > 70 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX="2px"
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default criticScore;
