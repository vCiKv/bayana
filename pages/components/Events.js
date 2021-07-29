import { Button,Box,SimpleGrid,Text, Grid,Heading } from "@chakra-ui/react"
export default function Events() {
    //use props to differentiate home page and full list 
    //templateColumns="80px 130px 150px 30px"
    const eventArray = [
        ['date','location','State','CountryCode','#'],
        ['2/13/24','event place','Lagos','NG','#'],
        ['6/1/10','nice location','Vancouver', 'CA','#'], 
    ] 
    const displayEvent = eventArray.map(arr=>{
        return (
            <SimpleGrid  mb="10"  key={arr[0]} columns={{sm:1,md:4}} spacingX="40px" spacingY="3px"  textAlign={["center",null]}>    
                <Text as="i" fontSize="20px">{arr[0]}</Text>
                <Text as="i" fontSize="20px">{arr[1]}</Text>
                <Text as="i" fontSize="20px">{arr[2]}, {arr[3]} Code</Text>
                <Button w="115px" variant="outline"  d="block" m='0 auto'><a href={arr[4]}>Get Ticket</a></Button>  
            </SimpleGrid> 
        )
    })
    return(
        <Box w="100%">
            <Heading size="3xl" pb="10" mt="10%">Events </Heading>
            <Grid>
                {displayEvent}
            </Grid>
        </Box>
       
        
    )
}