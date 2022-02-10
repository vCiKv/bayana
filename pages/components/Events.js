import React, { useState, useEffect } from 'react';
import { Button,Box,SimpleGrid,Text, Grid,Heading } from '@chakra-ui/react'
import firebase from '../api/firebase'
export default function Events() {
    const [eventData, setEventData] = useState({})
    useEffect(()=>{
        const sub = firebase.firestore().collection('ozeeil').doc('events').onSnapshot((snapshot)=>{
            setEventData(snapshot.data())
        })
        return()=>sub()
    })
    //use props to differentiate home page and full list 
    //templateColumns="80px 130px 150px 30px"
    const eventArray = [
        ['date','location','State','CountryCode','#'],
        ['2/13/24','event place','Lagos','NG','#'],
        ['6/1/10','nice location','Vancouver', 'CA','#'], 
    ] 
    const getInfo = ()=>{
       console.log('clicked')
    }
    return(
        <Box w="100%">
            <Heading size="3xl" pb="10" mt="10%">Events </Heading>
            {/* <Button onClick={getInfo}>get info</Button> */}
            <Grid>
            {Object.keys(eventData).map(key=>(
                <SimpleGrid  mb="10"  key={key} columns={{sm:1,md:4}} spacingX="40px" spacingY="3px"  textAlign={["center",null]}>    
                    <Text as="i" fontSize="20px">{new Date(eventData[key].date.seconds * 1000).toDateString()}</Text>
                    <Text as="i" textTransform='capitalize' fontSize="20px">{eventData[key].location}</Text>
                    <Text as="i" fontSize="20px"><Box as="span" textTransform='capitalize'>{eventData[key].state}</Box>, <Box as="span" textTransform='uppercase'>{eventData[key].countryCode}</Box></Text>
                    <Button w="115px" variant="outline"  d="block" m='0 auto'><a href={key[4]}>Get Ticket</a></Button>  
                </SimpleGrid> 
            ))}
            </Grid>
        </Box>    
    )
}