import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import SmartphoneImage from "../../images/EgretSmartphone.png";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Contact() {

    const emailAddress = 'adm@egretnegocios.com.br';
    const whatsappNumberRJ = '5521993173597';
    const whatsappNumberSP = '5511912988116';

    const isTablet = useMediaQuery('(min-width:900px)');

    return (
        <Stack
            id="contato"
            direction="row"
            justifyContent="space-between"
            bgcolor="#f6f6f6"
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
                <Stack width="50%">
                    <img src={SmartphoneImage} alt="Egret Smartphone" />
                </Stack>
            }

        </Stack>
    );
}