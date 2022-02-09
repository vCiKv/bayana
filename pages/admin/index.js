import {Box,FormControl,Button,useBoolean,InputGroup,InputRightElement,Center,Input,Heading} from '@chakra-ui/react'
import {Formik,Form,Field,FormErrorMessage} from 'formik'
import { useRouter } from 'next/router'
import * as Yup from 'yup'

export default function Admin(){
    const [changeType,setChangeType]= useBoolean()
    const {c} = useRouter()
    return(
        <center>
        <Box border="1px solid grey" borderRadius="6px" p="10" mt="10%" w="350px">
            <Center>
                <Heading>Login In</Heading>
            </Center>
            <Center mt="10%" >
                <Formik
                    initialValues={{ user:'',password:'' }}
                    validationSchema={Yup.object().shape({
                        user:Yup.string().required('required'),
                        password:Yup.string().required('required')
                    })}
                    onSubmit={(values)=>{alert(values)}}
                    
                >
                    <Form>
                        <FormControl htmlFor="user">
                            <Field name="user" type="text" placeholder="username" component={Input}/>
                        </FormControl>
                        <FormControl htmlFor="password">
                        <InputGroup size="md">
                            <Input
                                pr="4.5rem"
                                type={changeType ? "text" : "password"}
                                placeholder="Enter password"
                            />
                            {/* <Field name="password" type={changeType?"text":"password"} placeholder="Enter Password"/> */}

                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={setChangeType.toggle}>
                                    {changeType ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button type="submit">Login</Button>
                    </Form>
                </Formik>
            </Center>
        </Box>
        </center>
    )
}