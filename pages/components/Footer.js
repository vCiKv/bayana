import {Button,Text,Box,ButtonGroup,FormLabel,FormControl,FormHelperText,Flex,Spacer,SimpleGrid } from '@chakra-ui/react'
import { Formik,Form,ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
export default function Footer(){
    const addNewsletter = values =>{
        console.log('function')
        const str = `we'll email your updates: ${values.email}` 
        alert(str);
    }
    return(
        <footer>
            <Flex w="100%"bg="#eaeaef" p="10" wrap="wrap" align="center" justify="center">
                <Box >
                    <Formik
                        initialValues={{ email:'' }}
                        validationSchema={Yup.object().shape({
                            email:Yup.string().email('invalid email').required('required')
                        })}
                        onSubmit={(values, { setSubmitting }) => {addNewsletter(values); setSubmitting(false); console.log('selected')}}
                    >
                        <Form>
                            <FormControl id="email" >
                                <FormLabel htmlFor="email">sign-up for the newsletter</FormLabel> 
                                <SimpleGrid columns={{sm:1,md:2}} templateColumns="80% 20%" spacing="0">     
                                    <Field 
                                        name="email" 
                                        type="email" 
                                        placeholder="email address" 
                                        className="footerInput"                                                
                                    />  
                                    <Button size="sm" h="100%" type="submit">Submit</Button>
                                </SimpleGrid>           
                                <FormHelperText>no spam we promise</FormHelperText>
                                <ErrorMessage name="email" component="p" className="text-error"/>
                            </FormControl>         
                        </Form>
                    </Formik>
                </Box>
            
                <Spacer d={[null,'none']}/>
                
                <Box>
                    <Text>follow me on:</Text><br/>
                    <ButtonGroup variant="ghost">        
                        <SimpleGrid columns={{sm:1,md:2}}>    
                            <Button>instagram</Button> 
                            <Button>apple-music</Button> 
                            <Button> youtube </Button> 
                            <Button>spotify</Button>   
                        </SimpleGrid>
                    </ButtonGroup>
                </Box>
            </Flex>
        </footer>

    )
}