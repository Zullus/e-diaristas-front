import {styled} from '@material-ui/core/styles';
import { AppBar, Drawer, AppBarProps } from '@material-ui/core';

export const HeaderAppBar = styled((props: AppBarProps)=>(
    <AppBar position={'sticky'} {...props} />
))`
    &.MuiAppBar-root{
        background-color: ${({theme})=>theme.palette.background.paper};
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
        color: ${({theme})=>theme.palette.text.secondary};
    }

    .MuiToolBar-root{
        display: grid;
        grid-template-colums: 52px auto 52px;
        justify-content: space-between;
    }

    ${({theme}) => theme.breakpoints.up('md')}{
        .MuiToolBar-root{
            grid-template-colums: auto auto 1fr auto;
            gap: ${({theme})=>theme.spacing(9)};
            height: 100px;
        }        
    }
`;

export const HeaderLogo = styled("img")`
    height: 25px;

    ${({theme}) => theme.breakpoints.up('md')}{
        height: 47px;
    }
`;

export const HeaderDrawer = styled(Drawer)`
    MuiPaper-root{
        background-color: ${({theme}) => theme.palette.primary.main};
        padding: ${({theme}) => theme.spacing()};
        color: ${({theme}) => theme.palette.primary.contrastText};
    }

    .MuiDivider-root{
        margin: ${({theme}) => theme.spacing(2)};
        border-color: ${({theme}) => theme.palette.primary.light};

    }
`;

export const ButtonsContainer = styled('div')`
    display: grid;
    grid-template-colums: repeat(3, auto);
    gap: ${({theme})=>theme.spacing(2)};

`;