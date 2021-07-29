import { Box,Heading,Button,Image, Stack, Center } from "@chakra-ui/react"
export default function Hero(){
    const imageUrl = 'https://ik.imagekit.io/bayana/btrnas_DVeojili71.png?updatedAt=1627133894496'    
    const heroHeader = `get ready for the brand-new ep and vibe`
    return (
        <Stack direction={["column", "row"]} w="100%" minH="calc(100vh - 50px)" >
            <Box  pl="20px" h="100%">
                <Image src={imageUrl} alt="hero" boxSize="400px" fit="contain" ml="auto" mr="auto"/>
            </Box>
            <Box pl={["0","10%"]} p="10px"pt="15%" w={["auto","450px"]} textAlign={["center","left"]}>
                <Heading >{heroHeader}</Heading>
                <Button d="block" m={["10px auto","10px 0"]} colorScheme="teal" variant="outline">Get Ready</Button>
            </Box>
        </Stack>
    )
}