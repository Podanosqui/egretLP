import { Stack, Typography, useMediaQuery } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Benefits() {

    const isTablet = useMediaQuery('(min-width:900px)');

    return (
        <>
            <Stack>
                <Stack
                    id="vantagens"
                    direction="row"
                    width="100%"
                    justifyContent={isTablet ? "space-between" : "center"}
                >
                    <Stack
                        my={7}
                        mx={isTablet ? 7 : 0}
                        maxWidth="750px"
                    >
                        <Typography
                            color="#07263c"
                            
                            fontWeight="bold"
                            sx={isTablet ? {
                                borderLeft: "7px solid",
                                borderImageSlice: '1',
                                borderImageSource: "#07263c",
                                paddingLeft: "1rem",
                                marginLeft: "-1rem",
                                
                                fontSize: "28px"
                            } : {
                                borderLeft: "7px solid",
                                borderImageSlice: '1',
                                borderImageSource: "#07263c",
                                fontSize: "28px",
                                paddingLeft: "1rem",
                            }}
                        >
                            Vantagens do BPO
                        </Typography>
                    </Stack>
                    
                </Stack>
                <Stack
                    sx={isTablet ? {
                        background: 'linear-gradient(236deg, rgba(176,121,34,1) 40%, rgba(224,199,84,1) 76%)',
                        padding: "6rem 6rem 3rem 6rem",
                        borderRadius: "50px 50px 0 0"
                    } : {
                        background: 'linear-gradient(236deg, rgba(176,121,34,1) 40%, rgba(224,199,84,1) 76%)',
                        margin: "0 1rem",
                        padding: "2rem 1rem",
                        borderRadius: "50px 50px 0 0"
                    }}
                >
                    <Stack direction="row" alignItems="center" mb={2} color="#07263c">
                        <CheckCircleIcon sx={{ mr: 1 }} /><Typography fontWeight="bold" fontSize={isTablet ? "28px" : "22px" }>Profissionais experientes</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={2} color="#07263c">
                        <CheckCircleIcon sx={{ mr: 1 }} /><Typography fontWeight="bold" fontSize={isTablet ? "28px" : "22px" }>Entendemos a dor do seu negócio</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={2} color="#07263c">
                        <CheckCircleIcon sx={{ mr: 1 }} /><Typography fontWeight="bold" fontSize={isTablet ? "28px" : "22px" }>Menor custo para manter essas atividades internamente</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={2} color="#07263c">
                        <CheckCircleIcon sx={{ mr: 1 }} /><Typography fontWeight="bold" fontSize={isTablet ? "28px" : "22px" }>Sem dor de cabeça trabalhista</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={2} color="#07263c">
                        <CheckCircleIcon sx={{ mr: 1 }} /><Typography fontWeight="bold" fontSize={isTablet ? "28px" : "22px" }>Sem necessidade de treinar funcionários</Typography>
                    </Stack>

                </Stack>

            </Stack>
        </>
    );
}