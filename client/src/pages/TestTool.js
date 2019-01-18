import React, {Component} from 'react';
import NavWithSidebar from '../components/NavWithSidebar';
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class Profile extends Component {

    state= {
        tool: [], 
        tool_type: '', 
        condition: '', 
        manufacturer: '', 
        min_rental_time: '', 
        price_per_hour: '', 
        photo_url: '', 
        deposit: '', 
        phone_number: ''
    }; 

    conponentDidMount() {
        this.loadTools();
    }

    loadTools = () => {
        API.getTools()
        .then(res => this.setState({ tools: res.data }))
        .catch(err => console.log(err)); 
    };

    submitTools = event => {
        event.preventDefault()
        const { tool_type, condition, manufacturer, min_rental_time, price_per_hour, 
        photo_url, deposit, phone_number } = this.state
        if (! tool_type || !condition || !manufacturer || !min_rental_time || !price_per_hour ||
            !photo_url || !deposit || !phone_number)
            return 

            const tool = {
                tool_type, 
                condition, 
                manufacturer,
                min_rental_time, 
                price_per_hour, 
                photo_url, 
                deposit, 
                phone_number
            }
            console.log(tool); 

            // API.postTool() send new tool obj, send tool back so you don't have to 'get' tool again
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <NavWithSidebar current="toolentry"/>
                <h1>ToolEntry</h1>
           
           
            <Container fluid>
            <Row>
              <Col size="md-6">
              <form>
              <Input name="tool_type" placeholder="Tool (required)" onChange={this.handleChange} />
              <Input name="condition" placeholder="Condition (required)" onChange={this.handleChange} />
              <Input name="manufacturer" placeholder="Manufacturer (Optional)" onChange={this.handleChange} />
              <Input name="min_rental_price" placeholder="Min. Rental Price (Optional)" onChange={this.handleChange} />
              <Input name="price_per_hour" placeholder="Price Per Hour(Optional)" onChange={this.handleChange} />
              <Input name="photo_url" placeholder="Photo URL(Optional)" onChange={this.handleChange} />
              <Input name="deposit" placeholder="Deposit (Optional)" onChange={this.handleChange} />
              <Input name="phone_number" placeholder="Phone Number (Optional)" onChange={this.handleChange} />
              <FormBtn onClick={event => this.submitTool(event)}>Submit Tool</FormBtn>
            </form>
            </Col>
            </Row>
            </Container>
            </div>
    );
           
    }
};


export default Profile;