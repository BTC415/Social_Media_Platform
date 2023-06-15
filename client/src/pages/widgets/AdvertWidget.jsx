import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://res.cloudinary.com/daxmjqsy2/image/upload/v1679635183/vcover2_qqr2gy.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Nike</Typography>
        <Typography color={medium}>nike.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        “ Believe in something. Even if it means sacrificing
        everything.Yesterday you said tomorrow. JUST DO IT. ”
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
