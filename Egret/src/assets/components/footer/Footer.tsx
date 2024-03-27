import { Link, Stack, Typography, useMediaQuery } from "@mui/material";

export default function Footer() {

    const isTablet = useMediaQuery('(min-width:900px)');

    return (
        <>
            <Stack bgcolor="#07263c" padding="2rem 1rem" justifyContent="space-around">
                <Stack direction={"column"} justifyContent="space-between">

                    
                </Stack>
                <Stack alignItems="center" mt={3}>
                    <Typography sx={isTablet ? {} : { mb: 2 }} textAlign="center" color="#fff">&copy; Copyright - 2024, Egret Negócios. Todos os direitos reservados</Typography>
                    <Typography textAlign="center" color="#fff">Desenvolvido por <Link sx={{ textDecoration: "none", color: "#fff", textTransform: "none", "&:hover": { textDecoration: "underline" } }} href="https://www.linkedin.com/in/rodrigo-podanosqui-939706230/" target='_blank'>Rodrigo Podanosqui</Link></Typography>
                </Stack>
            </Stack>
        </>
    );
}