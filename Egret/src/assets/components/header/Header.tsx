import { Button, Stack, useMediaQuery } from "@mui/material";
import LogoEgretTop from "../../images/LogoEgretTop.png"

export default function Header() {

    const isTablet = useMediaQuery('(min-width:900px)');

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Stack
                width="100%"
                direction="row"
                justifyContent={isTablet ? "space-around" : "center"}
                padding="2rem 1rem 0 1rem"
            >
                <Stack>
                    <img
                        style={{ width: "250px" }}
                        src={LogoEgretTop}
                        alt="Logo Egret Negócios" />
                </Stack>
                <Stack
                    direction="row"
                    width="40%"
                    justifyContent="space-between"
                    alignItems="center"
                    display={isTablet ? "" : "none"}
                >

                    <Button
                        onClick={(e) => handleScroll(e, 'sobre')}
                        href="#sobre"
                        sx={{
                            textTransform: "none",
                            fontWeight: "bold",
                            fontSize: "22px",
                            color: "#fff",
                            padding: "8px 16px",
                            '&:hover': {
                                color: "#e8d067",
                                outline: "1px solid #e8d067",
                                transition: ".5s ease",
                                bgcolor: "transparent"
                            }
                        }}
                    >Sobre</Button>
                    <Stack height="30px" border="1px solid #d2b35740" mr={1} ml={1} ></Stack>
                    <Button
                        onClick={(e) => handleScroll(e, 'vantagens')}
                        href="#vantagens"
                        sx={{
                            textTransform: "none",
                            fontWeight: "bold",
                            fontSize: "22px",
                            color: "#fff",
                            padding: "8px 16px",
                            '&:hover': {
                                color: "#e8d067",
                                outline: "1px solid #e8d067",
                                transition: ".5s ease",
                                bgcolor: "transparent"
                            }
                        }}
                    >Vantagens</Button>
                    <Stack height="30px" border="1px solid #d2b35740" mr={1} ml={1} ></Stack>
                    <Button
                        onClick={(e) => handleScroll(e, 'contato')}
                        href="#contato"
                        sx={{
                            textTransform: "none",
                            fontWeight: "bold",
                            fontSize: "22px",
                            color: "#fff",
                            padding: "8px 16px",
                            '&:hover': {
                                color: "#e8d067",
                                outline: "1px solid #e8d067",
                                transition: ".5s ease",
                                bgcolor: "transparent"
                            }
                        }}
                    >Contato</Button>
                </Stack>
            </Stack>
        </>
    );
}