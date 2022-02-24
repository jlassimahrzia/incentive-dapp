import React from "react";
import { Button  , Table , Row , Col } from "react-bootstrap";
import Swal from "sweetalert2";  
import { Formik, Field, Form } from "formik";
import Web3 from 'web3';
import { useState , useEffect} from 'react';
import { ClientRate_ADDRESS , ClientRate_ABI} from './config'

function ClientRate() {

    const [account, setAccount] = useState('');
    const [ClientRateContract, setClientRateContract] = useState(null);
    const [RateCount, setRateCount] = useState();
    const [ratings, setratings] = useState([]);
    const [rate, setrate] = useState(null);
    useEffect(() => {
        loadBlockchainData()
    }, [])

    function handleClick() {
        Swal.fire({  
          title: 'Success',  
          type: 'success',  
          text: 'Congratulations you have won 5 ethers.',  
        });  
    } 

    async function loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        const ClientRateContract = new web3.eth.Contract(ClientRate_ABI, ClientRate_ADDRESS);
        setClientRateContract(ClientRateContract);
        console.log(ClientRateContract)

        const RateCount = await ClientRateContract.methods.rateCounter().call()
        setRateCount(RateCount)
        console.log(RateCount)

        for (var i = 1; i <= RateCount; i++) {
            const rate = await ClientRateContract.methods.ratings(i).call()
            setrate(rate)
        }
    }
    
    return (
        <div >
            
            <Row>
                <Col></Col>
                <Col>
                <Formik
                    initialValues={{
                        location : -1,
                        price : -1,
                        activities : -1,
                        services : -1,
                      
                        cleanliness : -1,
                        variety : -1,
                        taste : -1,
                        service : -1,
                        
                        roomservice : -1,
                        cleanlinessRoom : -1,
                        decoration : -1,
                        view : -1,
                        
                        reception : -1,
                        waiters : -1,
                        professionnalism : -1,
                        availability : -1
                    }}
                    onSubmit={async (values) => {
                        /* await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2)); */
                        console.log(values);
                    }}
                    >
                    {({ values }) => (
            <Form>
                <Table responsive="sm" style={{width: "600px"}}>
                    <thead>
                    <tr>
                        <th colSpan={2} style={{textAlign:"center"}}>General</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{width: "50%"}}>Location</td>
                        <td style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="location" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"  name="location"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true" name="location"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"  name="location"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"  name="location"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td  style={{width: "50%"}}>Price</td>
                        <td  style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="price" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="price"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="price"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="price"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="price"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: "50%"}}>Activities</td>
                        <td style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="activities" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="activities"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="activities"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="activities"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="activities"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td  style={{width: "50%"}}>Services</td>
                        <td style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="services" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="services"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="services"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="services"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="services"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </Table>

                <Table responsive="sm" style={{width: "600px"}}>
                    <thead>
                    <tr>
                        <th colSpan={2} style={{textAlign:"center"}}>Food</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{width: "50%"}}>Cleanliness</td>
                        <td style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="cleanliness" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="cleanliness"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="cleanliness"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="cleanliness"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="cleanliness"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td  style={{width: "50%"}}>Variety</td>
                        <td  style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="variety" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="variety"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="variety"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="variety"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="variety"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: "50%"}}>Taste</td>
                        <td style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="taste" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="taste"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="taste"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="taste"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="taste"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td  style={{width: "50%"}}>Service</td>
                        <td style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="service" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="service"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="service"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="service"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="service"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </Table>
               
                <Table responsive="sm" style={{width: "600px"}}>
                    <thead>
                    <tr>
                        <th colSpan={2} style={{textAlign:"center"}}>Stay</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{width: "50%"}}>RoomService</td>
                        <td style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="roomservice" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="roomservice"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="roomservice"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="roomservice"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="roomservice"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td  style={{width: "50%"}}>Cleanliness</td>
                        <td  style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="cleanlinessRoom" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="cleanlinessRoom"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="cleanlinessRoom"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="cleanlinessRoom"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="cleanlinessRoom"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: "50%"}}>Decoration</td>
                        <td style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="decoration" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="decoration"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="decoration"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="decoration"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="decoration"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td  style={{width: "50%"}}>View</td>
                        <td style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="view" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="view"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="view"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="view"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="view"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </Table>

                <Table responsive="sm" style={{width: "600px"}}>
                    <thead>
                    <tr>
                        <th colSpan={2} style={{textAlign:"center"}}>Staff</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{width: "50%"}}>Reception</td>
                        <td style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="reception" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="reception"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="reception"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="reception"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="reception"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td  style={{width: "50%"}}>Waiters</td>
                        <td  style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="waiters" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="waiters"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="waiters"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="waiters"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="waiters"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: "50%"}}>Professionnalism</td>
                        <td style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="professionnalism" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="professionnalism"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="professionnalism"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="professionnalism"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="professionnalism"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td  style={{width: "50%"}}>Availability</td>
                        <td style={{width: "50%"}}>
                            <div className="mb-3">
                                <label style={{margin: "10px"}}> 
                                <Field inline="true" name="availability" type="radio" id="1" value="1"/>1</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="availability"  type="radio" id="2" value="2"/>2</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="availability"  type="radio" id="3" value="3"/>3</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="availability"  type="radio" id="4" value="4"/>4</label>
                                <label  style={{margin: "10px"}}>
                                <Field inline="true"   name="availability"  type="radio" id="5" value="5"/>5</label>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" type="submit"  onClick={handleClick.bind(this)}>
                       Rate
                    </Button>               
                </div>
            </Form>)}
    </Formik>
                </Col>
                <Col></Col>
            </Row>
        
        </div>
    );
} 

export default ClientRate;