import { Stack, Typography, useMediaQuery } from "@mui/material";

// Imagens
import BackgroundWWD from "../../images/BackgroundWWD.png"

export default function WhatWeDo() {

    const isTablet = useMediaQuery('(min-width:900px)');

    return (
        <>
            <Stack
                // height="80vh"
                direction="row"
                justifyContent="space-between"
                padding={isTablet ? "4rem 3rem" : "3rem 2rem"}
                sx={{
                    backgroundImage: `url(${BackgroundWWD})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <Stack
                >
                    <Stack mb={6}>
                        <Typography
                            color="#fff"
                            fontSize="28px"
                            fontWeight="bold"
                            sx={{
                                borderLeft: "7px solid",
                                borderImageSlice: '1',
                                borderImageSource: "linear-gradient(10deg, #9d6001, #eed96f )",
                                paddingLeft: "1rem",
                                marginLeft: "-1rem",
                                width: "270px"
                            }}
                        >O que BPO financeiro faz?
                        </Typography>
                    </Stack>
                    <Stack
                        width="100%"
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        flexWrap="wrap"
                        gap='3'
                    >
                        <Stack
                            width="40%"
                            minWidth="270px"
                            height={isTablet ? "320px" : "400px"}

                            padding="1rem .5rem 3rem .5rem"
                            sx={{
                                border: "2px solid #fff",
                                color: "#fff",
                                textAlign: "center",
                                borderRadius: "16px",
                                marginBottom: "2rem"

                            }}>
                            <Stack mb={2} pb={2} sx={{
                                borderBottom: "2px solid #fff"
                            }}>
                                <Typography fontWeight="bold" fontSize="22px">Controle do fluxo de caixa</Typography>
                            </Stack>
                            <Stack height="100%" alignItems="center" justifyContent="center">
                                <Typography fontSize="18px" >Cada entrada e saída de valores (contas a pagar e contas a receber) é controlada e classificada. Você saberá, em detalhes, como cada despesa impacta no seu orçamento e como é o perfil de pagamento do seu cliente.</Typography>
                            </Stack>

                        </Stack>
                        <Stack
                            width="40%"
                            minWidth="270px"
                            height={isTablet ? "320px" : "400px"}
                            padding="1rem .5rem 3rem .5rem"
                            sx={{
                                border: "2px solid #fff",
                                color: "#fff",
                                textAlign: "center",
                                borderRadius: "16px",
                                marginBottom: "2rem"

                            }}>
                            <Stack mb={2} pb={2} sx={{
                                borderBottom: "2px solid #fff"
                            }}>
                                <Typography fontWeight="bold" fontSize="22px">Projeção do fluxo financeiro futuro</Typography>
                            </Stack>
                            <Stack height="100%" alignItems="center" justifyContent="center">
                                <Typography fontSize="18px" >Saber com antecedência o calendário de desembolso e assim, ter maior previsibilidade da necessidade de capital em cada período. Apresentação de relatórios e indicativos de performance (KPI)</Typography>
                            </Stack>

                        </Stack>
                        <Stack
                            width="40%"
                            minWidth="270px"
                            height={isTablet ? "320px" : "400px"}
                            padding="1rem .5rem 3rem .5rem"
                            sx={{
                                border: "2px solid #fff",
                                color: "#fff",
                                textAlign: "center",
                                borderRadius: "16px",
                                marginBottom: "2rem"

                            }}>
                            <Stack mb={2} pb={2} sx={{
                                borderBottom: "2px solid #fff"
                            }}>
                                <Typography fontWeight="bold" fontSize="22px">Elaboração e análise de relatórios</Typography>
                            </Stack>
                            <Stack height="100%" alignItems="center" justifyContent="center">
                                <Typography fontSize="18px" >Confecção de relatórios úteis sobre o desempenho financeiro da empresa, de forma simples e direta.</Typography>
                            </Stack>

                        </Stack>
                        <Stack
                            width="40%"
                            minWidth="270px"
                            height={isTablet ? "320px" : "400px"}
                            padding="1rem .5rem 3rem .5rem"
                            sx={{
                                border: "2px solid #fff",
                                color: "#fff",
                                textAlign: "center",
                                borderRadius: "16px",
                                marginBottom: "2rem"

                            }}>
                            <Stack mb={2} pb={2} sx={{
                                borderBottom: "2px solid #fff"
                            }}>
                                <Typography fontWeight="bold" fontSize="22px">Consultoria estratégica</Typography>
                            </Stack>
                            <Stack height="100%" alignItems="center" justifyContent="center">
                                <Typography fontSize="18px" >Com base em números confiáveis e completos, realizamos a análise dos resultados financeiros e auxiliamos no planejamento estratégico do negócio, direcionando os esforços para metas alcançáveis de resultado. </Typography>
                            </Stack>

                        </Stack>

                    </Stack>

                </Stack>
            </Stack>
        </>
    );
}