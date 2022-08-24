import {styled} from '@material-ui/core/styles';
import { Typography, ListItem, List, Link, LinkProps, IconButton, Container } from '@material-ui/core';

export const FooterContainer = styled('footer')`
    background-color: ${({theme})=>theme.palette.primary.main};
    color: ${({theme})=>theme.palette.primary.contrastText};
    padding: ${({theme}) => theme.spacing(4)} 0;
    margin-top: auto;
`;

export const FooterTitle = styled((props) => (
    <Typography variant={'body2'} component={'h2'} {...props}/>
))`
    font-weight: bold;
`;

export const FooterListItem = styled((props => 
    <ListItem disableGutters {...props}/>))`

`;

export const SocialContainer = styled('div')`
    diplay: flex;
    flex-direction: column;

    ${({theme})=>theme.breakpoints.down('md')}{
        width: 100%;
        flex-direcrion: row-reverse;
        justify-content: space-between;
    };

    ${({theme})=>theme.breakpoints.down(726)}{
        flex-direcrion: column;
    };
`;

export const AppList = styled('ul')`
    diplay: flex;
    gap: ${({theme})=>theme.spacing()};
    list-style: none;
    padding: 0;
    margin: ${({theme})=>theme.spacing(2) + '0' + theme.spacing(3)}

    img{
        width: 112px;
    }
`;

export const FooterSocialButton = styled(List)`
    display: grid;
    grid-template-colums: repeat(3, 58px);
    grid-gap: ${({theme})=>theme.spacing(1.5)}; 
`;

export const SocialButton = styled((props: LinkProps) => (
    <Link 
        component={IconButton} 
        target={'_blank'}
        rel={'noopener noreferrer'} 
        {...props}
    />
))`
background-color: ${({theme})=>theme.palette.primary.dark};
i{
    color: ${({theme})=>theme.palette.primary.contrastText};
}
`;

export const FooterGrid = styled(Container)`
    display: flex;
    justify-content: space-between;
    gap: ${({theme})=>theme.spacing(2)}; 
    flex-wrap: wrap;
`;