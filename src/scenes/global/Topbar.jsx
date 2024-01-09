import { Box, Grid, IconButton, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDark from "../../svg/ArrowDark";
import Question from "../../svg/Question";
import Messenger from "../../svg/Messenger";

const Topbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{
        padding: "8px 32px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #D9D9D9",
      }}
    >
      <Grid container>
        <Grid item sm={4} sx={{display:"flex",alignItems:"center"}}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "16px", paddingRight: "16px" }}>
              Payments
            </Typography>
            <Question />
            <Typography variant="caption" sx={{ fontSize: "16px", paddingLeft: "6px" }}>
              How it works
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} sx={{display:"flex",alignItems:"center"}}>
          <Box
            sx={{width:"100%",borderRadius:"6px",backgroundColor:"#F2F2F2",display:"flex"}}
          >
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Search features,  tutorials, etc."
            />
          </Box>
        </Grid>
        <Grid item sm={4} sx={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:1}}>
            <IconButton sx={{backgroundColor:"#e6e6e6",width:"40px",height:"40px"}}>
              <Messenger />
            </IconButton>
            <IconButton sx={{padding:0}}>
              <ArrowDark />
            </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Topbar;
