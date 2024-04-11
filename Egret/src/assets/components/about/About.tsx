import * as React from 'react';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary, Stack, Typography, useMediaQuery } from "@mui/material";
import LogoEgretS2 from "../../images/LogoEgretSimple.png";
import Fade from '@mui/material/Fade';

//Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About() {

    const isMobile = useMediaQuery('(max-width:768px)');
    const isTablet = useMediaQuery('(min-width:900px)');
    const isDesktop = useMediaQuery('(min-width:1200px)');


    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <>
            <Stack
                id="sobre"
                direction="row"
                justifyContent="space-between"
                padding="4rem 3rem"
                sx={{
                    bgcolor: "#f6f6f6"
                }}>
                <Stack
                    // width="55%"
                    maxWidth="750px"
                >
                    <Typography
                        color="#07263c"
                        fontSize="42px"
                        fontWeight="bold"
                        sx={{
                            borderLeft: "7px solid",
                            borderImageSlice: '1',
                            borderImageSource: "linear-gradient(10deg, #9d6001, #eed96f )",
                            paddingLeft: "1rem",
                            marginLeft: "-1rem"
                        }}
                    >Quem somos</Typography>
                    <Typography
                        color="#07263c"
                        fontSize={isTablet ? "28px" : "18px"}
                        sx={{
                            margin: "4rem 0"
                        }}
                    >A Egret é uma consultoria com mais de 13 anos de experiência em apoiar empresas de diferentes segmentos no Brasil e no exterior. Trabalhamos desde a base, estabelecendo rotinas e processos que gerem um controle financeiro total, até o topo, onde as importantes decisões sobre a direção do negócio são tomadas.</Typography>
                    
                        <Accordion
                            expanded={expanded}
                            onChange={handleExpansion}
                            slots={{ transition: Fade as AccordionSlots['transition'] }}
                            slotProps={{ transition: { timeout: 600 } }}
                            sx={{
                                
                                color: "#07263c",
                                maxWidth: "400px",
                                backgroundColor: "#a87b05",
                                '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                                '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: "#07263c", }} />}
                            >
                                <Typography fontWeight="bold" fontSize={isMobile ? "14px" : "20px"}>O que oferecemos além do BPO?</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ marginLeft: "12px" }}>
                                <Typography sx={{ mb: 1, textDecoration: "underline", fontWeight: "bold" }}>Expertise na área de:</Typography>
                                <ul style={{ marginBottom: 2 }}>
                                    <li><Typography>Plano de negócios</Typography></li>
                                    <li><Typography>Aprovação de Crédito</Typography></li>
                                    <li><Typography>Renegociação de dívidas</Typography></li>
                                    <li><Typography>Planejamento tributário</Typography></li>
                                </ul>
                                <Typography sx={{ mt: 3, mb: 1, textDecoration: "underline", fontWeight: "bold" }}>Assessoria Jurídica:</Typography>
                                <ul style={{ marginBottom: 2 }}>
                                    <li><Typography>Direito Trabalhista</Typography></li>
                                    <li><Typography>Direito Bancário</Typography></li>
                                    <li><Typography>Direito Tributário</Typography></li>
                                </ul>
                                
                            </AccordionDetails>
                        </Accordion>
                </Stack>
                {isDesktop &&
                    <Stack
                        width="40%"
                        justifyContent="center"
                        alignItems="center">

                        <img src={LogoEgretS2} style={{ width: "100%" }} alt="" />
                    </Stack>
                }
            </Stack>
        </>
    );
}