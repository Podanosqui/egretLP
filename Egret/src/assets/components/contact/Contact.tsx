import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import SmartphoneImage from "../../images/EgretSmartphone.png";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WallArrow from '../../images/WallArrowImg.png'

export default function Contact() {

    const emailAddress = 'adm@egretnegocios.com.br';
    const whatsappNumberRJ = '5521993173597';
    const whatsappNumberSP = '5511912988116';

    const isTablet = useMediaQuery('(min-width:900px)');
    const isDesktop = useMediaQuery('(min-width:1100px)');

    return (
        <Stack id="contato">
            <Stack direction="row" justifyContent={isDesktop ? "space-between" : "center"} alignItems="center">
                <Stack mx={isDesktop ? 10 : 1} my={isDesktop ? "" : 5} width={isDesktop ? "700px" : "90%"}>
                    <Typography textAlign={isTablet ? 'left' : "center"} color="#ae7b14" fontSize={isDesktop ? 42 : 30} sx={{ borderBottomWidth: "4px", borderBottomStyle: "solid" , borderImage: "linear-gradient( to right, #9d6001, #eed96f ) 1" }}>Entre em contato conosco agora e dê o próximo passo para a excelência operacional.</Typography>
                </Stack>
                {isDesktop &&
                    <Stack width="40%">
                    <img src={WallArrow} alt="Arrow Image" />
                </Stack>

                }

            </Stack>
            <Stack
                direction="row"
                justifyContent="space-between"
                bgcolor="#fff"
            >
                <Stack
                    width={isTablet ? "50%" : "100%"}
                    padding="3rem">

                    <Typography
                        color="#000"
                        fontSize="42px"
                        fontWeight="bold"
                        sx={{
                            borderLeft: "7px solid",
                            borderImageSlice: '1',
                            borderImageSource: "linear-gradient(10deg, #9d6001, #eed96f )",
                            paddingLeft: "1rem",
                            marginLeft: "-1rem"
                        }}
                    >Fale conosco
                    </Typography>
                    <Stack height="100%" justifyContent="center" >
                        <Stack direction="row" alignItems="center" mb={4} mt={isTablet ? {} : 8}>
                            <Button
                                href={`https://wa.me/${whatsappNumberRJ}`}
                                target="_blank"
                                sx={{
                                    width: "220px",
                                    fontSize: "22px",
                                    textTransform: "none",
                                    border: "1px solid #07263c",
                                    bgcolor: "#07263c",
                                    color: "#fff",
                                    mr: 2,
                                    '&:hover': {
                                        color: "#07263c"
                                    }
                                }}
                            ><WhatsAppIcon fontSize="large" sx={{ mr: 1 }} />WhatsApp
                            </Button>
                            <Typography color="#d6a515" fontSize="28px" fontWeight="bold">RJ</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" mb={4}>
                            <Button
                                href={`https://wa.me/${whatsappNumberSP}`}
                                target="_blank"
                                sx={{
                                    width: "220px",
                                    fontSize: "22px",
                                    textTransform: "none",
                                    border: "1px solid #07263c",
                                    bgcolor: "#07263c",
                                    color: "#fff",
                                    mr: 2,
                                    '&:hover': {
                                        color: "#07263c"
                                    }
                                }}
                            ><WhatsAppIcon fontSize="large" sx={{ mr: 1 }} />WhatsApp
                            </Button>
                            <Typography color="#d6a515" fontSize="28px" fontWeight="bold">SP</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <Button
                                href={`mailto:${emailAddress}`}
                                target="_blank"
                                sx={{
                                    width: "220px",
                                    fontSize: "22px",
                                    textTransform: "none",
                                    border: "1px solid #07263c",
                                    bgcolor: "#07263c",
                                    color: "#fff",
                                    mr: 2,
                                    '&:hover': {
                                        color: "#07263c"
                                    }
                                }}
                            ><MailOutlineIcon fontSize="large" sx={{ mr: 1 }} />Email
                            </Button>
                        </Stack>
                    </Stack>


                </Stack>

                {isTablet &&
                    <Stack width="40%">
                        <img src={SmartphoneImage} alt="Egret Smartphone" />
                    </Stack>
                }

            </Stack>
        </Stack>
    );
}