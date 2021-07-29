import {Heading,AspectRatio,SimpleGrid, Box, Flex} from '@chakra-ui/react'
import { useState } from 'react'
export default function Videos(){
    const [currentIndex,setCurrentIndex] = useState(0)
    const ytLinks = ['https://www.youtube.com/embed/Mb28JAoEKAU','https://www.youtube.com/embed/3A3MiNlX6II','https://www.youtube.com/embed/3QWCjiZSdGQ']

    const moveVideo = (direction) =>{
        const l = 3
        //const [next,prev] = [currentIndex+1,currentIndex-1]
        const prev = currentIndex-1 < 0 ? l : currentIndex-1
        const next = currentIndex+1 > l ? 0 : currentIndex+1
        direction === 'p' ? setCurrentIndex(prev) : setCurrentIndex(next)
    }
    return(
        <Box w="100%">
        <Heading size="3xl" mb="10">Videos</Heading>
        <Flex justify="space-evenly" wrap="wrap" direction={{sm:"column",md:"row"}}> 

            <AspectRatio grow="1" minW="50%" minH="325" mb="5"ratio={16 / 9}>
                <iframe
                    title="video"
                    src={ytLinks[currentIndex]}  
                    allowFullScreen    
                />
            </AspectRatio>
            <AspectRatio grow="1" minW="50%" minH="325" mb="5" ratio={16 / 9}>
                <iframe
                    title="video"
                    src={ytLinks[currentIndex+1]}
                    allowFullScreen
                />
            </AspectRatio>  
        </Flex>
     </Box>
    )
}