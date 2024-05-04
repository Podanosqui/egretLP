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
            height={isTablet ? "80vh" : "70vh"}
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
                <Stack>


                    <Stack
                        borderLeft="5px solid #fff"
                    >
                        <Typography
                            fontSize={isTablet ? "32px" : "24px"}
                            ml={2}
                            fontWeight="500"
                            color="#fff"
                        >
                            Quer se livrar do operacional?
                        </Typography>
                    </Stack>
                    <Stack>


                        <Typography
                            color="#fff"
                            fontWeight="bold"
                            lineHeight={isTablet ? "50px" : "35px"}
                            fontSize={isTablet ? "52px" : "28px"}
                            ml={2}
                            width={isTablet ? "600px" : {}}
                        >
                            Gestão e controle
                        </Typography>
                        <Typography
                            color="#fff"
                            fontWeight="300"
                            lineHeight={isTablet ? "50px" : "35px"}
                            fontSize={isTablet ? "52px" : "28px"}
                            ml={2}
                            width={isTablet ? "600px" : {}}
                        >
                            Domine os números do seu negócio com facilidade e eficiência.
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}