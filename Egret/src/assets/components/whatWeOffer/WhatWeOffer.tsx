import { Stack, Typography } from "@mui/material";

export default function WhatWeOffer() {
    return (
        <>
            <Stack
                id="vantagens"
                height="60vh"
                padding="4rem 3rem"
            >
                <Stack
                    // width="55%"
                    maxWidth="750px"
                >
                    <Typography
                        color="#7263c"
                        fontSize="28px"
                        fontWeight="bold"
                        sx={{
                            borderLeft: "7px solid",
                            borderImageSlice: '1',
                            borderImageSource: "#07263c",
                            paddingLeft: "1rem",
                            marginLeft: "-1rem",
                            width: "300px"
                        }}
                    >O que oferecemos além do BPO?</Typography>


                </Stack>
            </Stack>
        </>
    );
}