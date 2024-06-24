
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography, Link } from "@mui/material";
function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        boxShadow: 8,
        alignItems: "center",
        height: 54
      }}
    >
      <Typography
        variant="body2"
        color="grey"
        align="center"
        sx={{ mt: 4, mb: 5 }}
      >
        {"Copyright © "}
        <Link color="inherit" to="/" style={{ color: "grey" }}>
          My App
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

export default Footer;
