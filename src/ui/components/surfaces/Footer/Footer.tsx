import { 
    FooterContainer, 
    FooterTitle, 
    FooterListItem, 
    SocialContainer, 
    AppList, 
    FooterSocialButton, 
    SocialButton,
    FooterGrid
} from "./Footer.style";
import { List, Box, Typography } from '@material-ui/core';
import Link from '../../navigation/Link/Link';

const Footer = () => {
    return (
    <FooterContainer>
        <FooterGrid>
            <div>
                <FooterTitle>Menu</FooterTitle>
                <List>
                    <FooterListItem>
                        <Link 
                            href={'/encontrar-diarista'}
                            mui={{color:'inherit', variant: 'body2'}}
                        >
                            Encontrar Uma Diarista
                        </Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link 
                            href={'/cadastro/diarista'}
                            mui={{color:'inherit', variant: 'body2'}}
                        >
                            Seja Uma Diarista
                        </Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link 
                            href={'/'}
                            mui={{color:'inherit', variant: 'body2'}}
                        >
                            Por que usar o E-Diarista
                        </Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link 
                            href={'/'}
                            mui={{color:'inherit', variant: 'body2'}}
                        >
                            Principais Dúvidas
                        </Link>
                    </FooterListItem>
                </List>
            </div>
            
            <Box sx={{maxWidth:'400px'}}>
                <FooterTitle>
                    Quem Somos
                </FooterTitle>
                <Typography variant={'body2'} sx={{mt: 2}} >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquid obcaecati, quam est adipisci incidunt porro amet atque maiores accusantium deleniti dolore non rerum eveniet. Rerum aliquam nulla culpa optio.
                </Typography>
            </Box>

            <SocialContainer>
                <Box>
                    <FooterTitle>Baixe Nossos Aplocativos</FooterTitle>
                    <AppList>
                        <li>
                            <a 
                                href={'/'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                <img 
                                    src={'/img/logos/app-store.png'} 
                                    alt={'AppStore'} 
                                />
                            </a>
                        </li>
                        <li>
                            <a 
                                href={'/'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                <img 
                                    src={'/img/logos/google-play.png'} 
                                    alt={'Google Play'} 
                                />
                            </a>
                        </li>
                    </AppList>
                </Box>

                <div>
                    <FooterTitle>Redes Sociais</FooterTitle>
                    <FooterSocialButton>
                        <FooterListItem>
                            <SocialButton href={'/facebook.com'}>
                                <i className={'twf-facebook-f'}/>
                            </SocialButton>
                        </FooterListItem>
                        <FooterListItem>
                            <SocialButton href={'/instagram.com'}>
                                <i className={'twf-instagram'}/>
                            </SocialButton>
                        </FooterListItem>
                        <FooterListItem>
                            <SocialButton href={'/youtube.com'}>
                                <i className={'twf-youtube'}/>
                            </SocialButton>
                        </FooterListItem>
                    </FooterSocialButton>
                </div>
            </SocialContainer>
        </FooterGrid>

    </FooterContainer>
)}

export default Footer;