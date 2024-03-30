import { Stack, Typography, useMediaQuery } from "@mui/material";
import BackgroundS1 from "../../images/BackgroundS1.png";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import Header from "../header/Header";

export default function Section1() {

    const isTablet = useMediaQuery('(min-width:900px)');

    return (
        <Stack
            id="top"
            height={isTablet ? "80vh" : "60vh"}
            sx={{
                backgroundImage: `url(${BackgroundS1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <Header />
            <Stack
                height="100%"
                padding={isTablet ? "6rem 3rem" : "3rem 1rem"}
                direction="column-reverse"
            >
                <Stack
                    borderLeft="8px solid #fff"
                >
                    <Typography
                        fontSize={isTablet ? "52px" : "36px"}
                        ml={2}
                        fontWeight="500"
                        color="#fff"
                    >
                        Gestão e controle
                    </Typography>
                    <Typography
                        color="#fff"
                        fontWeight="300"
                        lineHeight={isTablet ? "50px" : "35px"}
                        fontSize={isTablet ? "52px" : "36px"}
                        ml={2}
                        width={isTablet ? "600px" : "300px"}
                    >
                        sobre os números
                    </Typography>
                    <Typography
                        color="#fff"
                        fontWeight="300"
                        lineHeight={isTablet ? "50px" : "35px"}
                        fontSize={isTablet ? "52px" : "36px"}
                        ml={2}
                        width={isTablet ? "600px" : "300px"}
                    >
                        do seu negócio.
                    </Typography>
                </Stack>

            </Stack>
        </Stack>
    );
}