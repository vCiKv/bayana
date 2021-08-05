import React, { useState,useEffect } from 'react';
import {Heading,Box,SimpleGrid,Button,Text, Center} from '@chakra-ui/react'
import Image from 'next/image'
import firebase from '../api/firebase'
export default function Music(){
    const [musicData,setMusicData] = useState([])
    //['id','name','imgUrl','link'],
    //MG8fsT88WsvukgJ collection(colString+'/singles')
    // const musicData = [
    //     [0,'mind','https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/e3/5e/10/e35e109f-23b7-f395-051b-da22322cfcc9/0.jpg/300x300bb.webp','https://music.apple.com/us/album/mind-single/1560831712'],
    //     [1,'wayo','https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/7c/d4/11/7cd4112a-105f-aaf2-e506-18e32039d7c2/300876499107.png/500x500bb.webp','https://music.apple.com/us/album/wayo-single/1489693993'],
    //     [2,'my paddy','https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/bd/a5/50/bda550f5-7edc-398a-103f-cb4277aa4831/artwork.jpg/500x500bb.webp','https://music.apple.com/us/album/my-paddy-feat-ozeeil/1559158616?i=1559158618'],
    // ]
    useEffect(()=>{
        const colString = 'ozeeil/music/singles'
        const sub = firebase.firestore().collection(colString).onSnapshot((snapshot) =>{
            const TempData = ( 
                snapshot.docs.map(
                    doc=> ({
                        id:doc.id, 
                        ...doc.data()
                    })    
                )  
            )
            setMusicData(TempData)  
        })
        return()=>sub()
    },[])
    
    const displayMusic = musicData.map(arr=>{
        return(
            <Box mb="10" key={arr.id}> 
                {/* <Image borderRadius="6px" boxSize="230px" m="0 auto" fit="cover" src={arr[2]} alt={arr.title}/> */}
                <Image src={arr.albumArt} alt={arr.title} width={500} height={500}/>
                <Box mt="10">
                    <Text align="center" fontSize="3xl" fontWeight="700" textTransform="Capitalize">{arr.title}</Text>
                    <Center mt="5">
                        <Button m="0 auto" variant="solid" colorScheme="teal" align="center"><a href={arr.getUrl}>Listen</a></Button>
                    </Center>
                </Box>    
            </Box>
        )
    })
    return(
        <Box className="music" w="100%">
            <Heading size="3xl" align={["center","left"]}> Music</Heading>
            <SimpleGrid mt="10%"columns={{sm:1,md:3}} spacingX="40px" spacingY="3px"> 
                {displayMusic}
            </SimpleGrid>  
        </Box>
    )
}
