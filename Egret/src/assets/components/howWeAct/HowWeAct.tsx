import { Stack, Typography, useMediaQuery } from "@mui/material";
import BackgroundHands from "../../images/BackgroundHands.png";
import Hands from "../../images/MaosImg.png";
import RazaoEmocao from "../../images/RazaoEmocao.png"

export default function HowWeAct() {

    const isTablet = useMediaQuery('(min-width:900px)');

    return (
        <>
            <Stack>
                <Stack
                    width="100%"
                    sx={{
                        backgroundImage: `url(${BackgroundHands})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <Stack
                        m={7}
                        maxWidth="750px"
                    >
                        <Typography
                            color="#fff"
                            fontSize="42px"
                            fontWeight="bold"
                            sx={{
                                borderLeft: "7px solid",
                                borderImageSlice: '1',
                                borderImageSource: "#fff",
                                paddingLeft: "1rem",
                                marginLeft: "-1rem",
                                width: "350px"
                            }}
                        >
                            Como atuamos
                        </Typography>
                    </Stack>
                    <Stack width="100%" mb={2} >
                        {isTablet &&
                            <img src={Hands} alt="Mãos Razão e Emoção" />
                        }
                        {!isTablet &&
                            <img src={RazaoEmocao} alt="Mãos Razão e Emoção" />
                        }
                    </Stack>
                    <Stack sx={isTablet ? { margin: "0 6rem 4rem 6rem", textAlign: "center", color: "#fff" } : { textAlign: "center", color: "#fff", margin: "1rem" }}>
                        <Typography fontSize="22px" mb={3}>É natural o empresário agir com emoção afrente da sua empresa.</Typography>
                        <Typography fontSize="22px" mb={3}>Ao tomar decisões, sentimentos de esperança/medo, otimismo/pessimismo, orgulho, frustração, apego, afetam a assertividade das decisões tomadas.</Typography>
                        <Typography fontSize="22px" mb={3}>Nós trazemos uma visão “externa” ao negócio, se concentrando nos indicadores e na experiência acumulada para orientar o processo decisório.</Typography>
                    </Stack>
                </Stack>


            </Stack>
        </>
    );
}