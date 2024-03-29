import { Box, Stack, Typography } from "@mui/material";
import logoImage from "../../assets/logo.png";

const Header = () => {
  return (
    <Stack
      padding={1}
      bgcolor={"var(--content-color)"}
      boxShadow={"var(--shadow)"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        width={"100%"}
        maxWidth={"var(--container)"}
        margin={"0 auto"}
      >
        <img src={logoImage} width={82} height={41} alt='Logo Mediporta' />
        <div>
          <Typography variant='body2' color='var(--accent-color)'>
            Zadanie rekrutacyjne
          </Typography>
          <Typography variant='body2' color='var(--accent-color)'>
            Szymon Szmydt
          </Typography>
        </div>
      </Box>
    </Stack>
  );
};

export default Header;
