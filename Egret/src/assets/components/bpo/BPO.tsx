import { Stack, Typography } from "@mui/material";
import WppBPO from "../../images/WppBPO.png";

export default function BPO() {
    return (
        <>
            <Stack
                p="4rem 2rem"
                sx={{
                    backgroundImage: `url(${WppBPO})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Typography
                    fontSize="28px"
                    mb={4}
                    fontWeight="bold"
                    sx={{
                        pl: "1rem",
                        borderLeft: "5px solid",
                        borderImageSlice: '1',
                        borderImageSource: "linear-gradient(10deg, #9d6001, #eed96f )"
                    }}>O que é BPO</Typography>

                <Typography fontSize="22px">BPO (Business Process Outsourcing) é um tipo de prestação de serviço voltado principalmente para pequenas e médias empresas que buscam profissionalizar a gestão do seu negócio.</Typography>

                <Typography fontSize="22px" my={3}>BPO, ou “Terceirização de Processos de Negócios”, como o nome já diz, é terceirizar a gestão de processos da empresa.
                </Typography>

                <Typography fontSize="22px">No Brasil, já se tornou tendência terceirizar o RH, o Jurídico, o Marketing e mais recentemente, o financeiro.</Typography>
            </Stack>
        </>
    );
}