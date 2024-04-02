import { Link, Stack, Typography } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';

export default function Footer() {

    return (
        <>
            <Stack bgcolor="#07263c" padding="2rem 1rem" justifyContent="space-around">
                <Stack alignItems="center" mt={3}>

                    <Typography
                    sx={{ mb: 1 }}
                        textAlign="center"
                        color="#fff">
                        <Link
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                textDecoration: "none",
                                color: "#fff",
                                textTransform: "none",
                                "&:hover": {
                                    textDecoration: "underline"
                                }
                            }}
                            href="https://maps.app.goo.gl/w6trabDK85kvXrK47"
                            target="_blank">
                            <PlaceIcon />Avenida das Américas, 500, Bloco 09 | Sala 129 | Barra da Tijuca, Rio de Janeiro | RJ
                        </Link>
                    </Typography>
                    <Typography
                        sx={{ mb: 2 }}
                        textAlign="center"
                        color="#fff">
                        <Link
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                textDecoration: "none",
                                color: "#fff",
                                textTransform: "none",
                                "&:hover": {
                                    textDecoration: "underline"
                                }
                            }}
                            href="https://maps.app.goo.gl/nijLVegGkBvYgcY27"
                            target="_blank">
                            <PlaceIcon />Avenida Dom Pedro II, 1.641, Sala 104 | Bairro Jardim, Santo André | SP
                        </Link>
                    </Typography>
                    <Typography sx={{ mt: 5, mb: 5 }} textAlign="center" color="#fff">&copy; Copyright - 2024, Egret Negócios. Todos os direitos reservados</Typography>
                </Stack>
            </Stack>
        </>
    );
}