import { Container, } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {Grid} from "@mui/material"
import { Link } from "react-router-dom";

const Footer = () =>  {
    return(
        <footer>
            <Box sx={{width:"100%"}}bgcolor="#8024d5" color="white">
                <Box sx={{width:"100%" ,display: "flex", justifyContent:"center"}}>
                    <div style={{padding:"15px"}}>About</div>
                    <div style={{padding:"15px"}}>Contact</div>
                    <div style={{padding:"15px"}}>Blog</div>
                    <div style={{padding:"15px"}}>Support</div>
                        
                   
                    
                    {/* <Grid  >
                    <Grid item xs={12} sm={2}>
                        <Box borderBottom={1}>About InfoApp</Box>
                        <Link to="/" color="inherit">
                            About
                        </Link>
                        
                        
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Box borderBottom={1}>About InfoApp</Box>
                        <Link to="/" color="inherit">
                            Contact InfoApp
                        </Link>
                        
                    </Grid>
                        
                     <Box textAlign="center" pt={{xs: 5, sm:10}} pb={{xs:5, sm:0}}>
                        InfoApp &reg;{new Date().getFullYear()}
                    </Box>   
                    
                    </Grid> */}
                    {/* <Box textAlign="center" pt={{xs: 5, sm:10}} pb={{xs:5, sm:0}}>
                        InfoApp &reg;{new Date().getFullYear()}
                    </Box> */}
                </Box>
                <Box textAlign="center" >
                        InfoApp &reg;{new Date().getFullYear()}
                    </Box>
            </Box>
        </footer>
    );
};
export default Footer; 
