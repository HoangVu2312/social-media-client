// The file is reuseable custom styled component

import { Box } from "@mui/material";
import { styled } from "@mui/system";


// create a flex container that horizontally spaces its child elements evenly and vertically centers them
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;