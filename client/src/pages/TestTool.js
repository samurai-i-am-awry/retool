import React, {Component} from 'react';
import NavWithSidebar from '../components/NavWithSidebar';
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class Profile extends Component {

    state = {
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
        this.loadTool();
    }

    loadTool = () => {
        API.getTool()
        .then(res => this.setState({ tools: res.data, 
        tool_type: "", condition: "", manufacturer: "", 
        min_rental_time: "", price_per_hour: "", photo_url: "",
        deposit: "", phone_numbers: "" })
        ) 
    .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.tool_type && this.state.condition && this.state.manufacturer && this.state.min_rental_time 
            && this.state.price_per_hour && this.state.photo_url && this.state.deposit && this.state.phone_number) {
          API.saveTool({
            tool_type: this.state.tool_type,
            condition: this.state.condition,
            manufacturer: this.state.manufacturer,
            min_rental_time: this.state.min_rental_time, 
            price_per_hour: this.state.price_per_hour, 
            photo_url: this.state.photo_url, 
            deposit: this.state.deposit,
            phone_number: this.state.phone_number
          })
            .then(res => this.loadTool())
            .catch(err => console.log(err));
        }
      };

    render() {
        return (
            <div>
                <NavWithSidebar current="toolentry"/>
                <h1>ToolEntry</h1>
           
            <Container fluid>
            <Row>
              <Col size="md-6">
              <form>
              <Input name="tool_type" placeholder="Tool (required)" value={this.state.tool_type}
                onChange={this.handleInputChange} />
              <Input name="condition" placeholder="Condition (required)" value={this.state.condition}
                onChange={this.handleInputChange} />
              <Input name="manufacturer" placeholder="Manufacturer (Optional)" value={this.state.manufacturer}
                onChange={this.handleInputChange}/>
              <Input name="min_rental_time" placeholder="Min. Rental Price (Optional)" value={this.state.min_rental_time}
                onChange={this.handleInputChange} />
              <Input name="price_per_hour" placeholder="Price Per Hour(Optional)" value={this.state.price_per_hour}
                onChange={this.handleInputChange} />
              <Input name="photo_url" placeholder="Photo URL(Optional)" value={this.state.photo_url}
                onChange={this.handleInputChange} />
              <Input name="deposit" placeholder="Deposit (Optional)" value={this.state.deposit}
                onChange={this.handleInputChange} />
              <Input name="phone_number" placeholder="Phone Number (Optional)"value={this.state.phone_number}
                onChange={this.handleInputChange} />
              <FormBtn onClick={this.handleFormSubmit}>Submit Tool</FormBtn>
            </form>
            </Col>
            </Row>
            </Container>
            </div>
        
        );   
    };
}
export default Profile;