import { Avatar, Paper, Typography } from "@mui/material";

const UserProfile = ({ data }) => {
  return (
    <Paper
    square={false}
      elevation={8}
      sx={{
        width: "250px",
        padding: "20px",
        textAlign: "center",
        margin: "20px auto",
        bgcolor:"#8bb6f7ff",
      }}
    >
      <Typography variant="h5" sx={{color:"#919392ff"}}>User Profile</Typography>
      <Avatar
        src={data.avatar}
        alt="User Avatar"
        sx={{ width: "200px", height: "auto", margin: "10px auto" , 
        paddingBottom:"10px"}}
      />
      <Typography variant="h5" sx={{color:"#fff", margin:"5px auto"}}>{data.name}</Typography>
      <Typography variant="body1" sx={{color:"#fff" ,  margin:"5px auto"}}>{data.email}</Typography>
      <Typography variant="body1" sx={{color:"#fff", margin:"5px auto    "}}>{data.role}</Typography>
    </Paper>
  );
};

export default UserProfile;
