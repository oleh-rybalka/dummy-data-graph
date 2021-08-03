import {Box, Paper} from '@material-ui/core'
function Layout({children}) {
    
    return (
        <Box m={2} >
        <Paper elevation={3}>
            {children}
        </Paper>
        </Box>
    )
}

export default Layout;