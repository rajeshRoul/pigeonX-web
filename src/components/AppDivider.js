const { styled, Divider } = require("@mui/material");

const AppDivider = styled(Divider)(({ theme }) => ({
  "&::before": {
    borderTop: `thin solid ${theme.palette.divider.main}`,
  },
  "&::after": {
    borderTop: `thin solid ${theme.palette.divider.main}`,
  },
}));

export default AppDivider;
