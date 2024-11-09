import React, {Component} from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
} from "reactstrap";

class CustomModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItem: this.props.activeItem,
        }
    }

    handleChange = (event) => {
        let {name, value} = event.target;

        if (event.target.type === 'checkbox') {
            value = event.target.checked
        }
        
        this.setState({...this.state,[name]: value})
    };



    render() {
        const {toggle, onSave} = this.props;
        return (
            <Modal isOpen toggle={toggle}>
                <ModalHeader toggle={toggle}>Todo item</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="todo-title">Title</Label>
                            <Input
                            type="text"
                            id="todo-title"
                            name="title"
                            value={this.state.activeItem.title}
                            onChange={this.handleChange}
                            placeholder="Enter Todo Title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="todo-description">description</Label>
                            <Input 
                                id="todo-description"
                                type="text"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Enter Todo Descriptin"
                                />
                        </FormGroup>
                        <FormGroup check> 
                            <label check>
                                <Input
                                type="check"
                                name="completed"
                                checked={this.state.activeItem.completed}
                                onChange={this.handleChange}
                                />
                                completed
                            </label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="success"
                        onClick={()=>onSave(this.state.activeItem)}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default CustomModal; 