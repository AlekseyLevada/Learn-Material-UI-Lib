import { AppBar, Toolbar, Typography, IconButton, Icon } from "@mui/material"
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const MainPage = () => {
    return(
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow:1}}>
                    Material UI 
                </Typography>
                <IconButton color="inherit">
                    <Icon>
                        <AccountBoxIcon/>
                    </Icon>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}