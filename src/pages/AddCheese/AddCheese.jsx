import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react'
import './addcheese.css'

class AddCheese extends Component {
  state = {
    invalidForm: true,
    formData: {
          name: '',
          category: '',
          country: '',
          brand: '',
          color: '',
          firmness: '',
          mould: false,
          gasHoles: false,
          texture: '',
          image: '',
        }
  };

  
  handleSubmit = e => {
    e.preventDefault();
    // We will write the handleAddCheese function in our App.js after this step...
    this.props.handleAddCheese(this.state.formData);
  };
  
  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
    });
  };
  
  formRef = React.createRef();

  render() {
    return (
        <>
        <Form id="cf" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <h1>Add Cheese</h1>
          <Form.Field>
            <label>Cheese Name</label>
            <input
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Category(required)</label>
            <input
              name="category"
              value={this.state.formData.category}
              onChange={this.handleChange}
              required
            />
            </Form.Field>
          <Form.Field>
            <label>Country</label>
            <input
              name="country"
              value={this.state.formData.country}
              onChange={this.handleChange}
            />
            </Form.Field>
          <Form.Field>
            <label>Brand</label>
            <input
              name="brand"
              value={this.state.formData.brand}
              onChange={this.handleChange}
            />
            </Form.Field>
          <Form.Field>
            <label>Color</label>
            <input
              name="color"
              value={this.state.formData.color}
              onChange={this.handleChange}
            />
            </Form.Field>
          <Form.Field>
            <label>Firmness (required)</label>
            <input
              name="firmness"
              value={this.state.formData.firmness}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Mould </label>
            <select 
            name="mould" 
            value={this.state.formData.mould}
            onChange={this.handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            </Form.Field>
          <Form.Field>
            <label>Gas Holes </label>
            <select 
            name="gasHoles" 
            value={this.state.formData.gasHoles}
            onChange={this.handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
          </Form.Field>
          <Form.Field>
            <label>Texture </label>
            <input
              name="texture"
              value={this.state.formData.texture}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Image URL</label>
            <input
              name="image"
              value={this.state.formData.image}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button
            type="submit"

            
          >
            ADD CHEESE
          </Button>
        </Form>
        </>
    );
  }
}

export default AddCheese;