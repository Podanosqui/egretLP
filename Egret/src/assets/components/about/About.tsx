import * as React from 'react';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary, Stack, Typography, useMediaQuery } from "@mui/material";
import BackgroundS2 from "../../images/BackgroundS2.png";
import LogoEgretS2 from "../../images/LogoEgretS2.png";
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
                    backgroundImage: `url(${BackgroundS2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <Stack
                    // width="55%"
                    maxWidth="750px"
                >
                    <Typography
                        color="#fff"
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
                        color="#fff"
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
                                color: "#fff",
                                maxWidth: "400px",
                                background: "rgb(157,96,1)",
                                backgroundColor: "linear-gradient(236deg, rgba(157,96,1,1) 40%, rgba(198,181,99,1) 72%)",
                                '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                                '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                            >
                                <Typography fontSize={isMobile ? "16px" : "20px"}>O que oferecemos além do BPO?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
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