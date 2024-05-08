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
            // height={isTablet ? "80vh" : "70vh"}
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
                        mb="3rem"
                        maxWidth="950px"
                    >
                        <Typography

                            fontSize={isTablet ? "32px" : "24px"}
                            ml={2}
                            fontWeight="bold"
                            color="#fff"
                        >
                            Quer se libertar do “operacional” para poder focar naquilo que realmente
                            traz <span
                                style={{
                                    marginRight: "6px",
                                    borderBottom: "5px solid",
                                    borderImageSlice: '1',
                                    borderImageSource: "linear-gradient(10deg, #9d6001, #eed96f )"
                                }}>resultado para seu bolso?</span>
                        </Typography>
                    </Stack>
                    <Stack>


                        <Typography
                            color="#fff"
                            fontWeight="bold"
                            fontSize={isTablet ? "52px" : "28px"}
                            ml={2}
                            width={isTablet ? "600px" : {}}
                        >
                            BPO Financeiro
                        </Typography>
                        <Typography
                            color="#fff"
                            fontWeight="300"
                            lineHeight={isTablet ? "55px" : "35px"}
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