import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'

class EditCheesePage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.cheese
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateCheese(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
    });
  };

  render() {
    return (
        <>
        <Form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <h1>Edit Cheese</h1>
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
            className="btn"
            disabled={this.state.invalidForm}
          >
            SAVE CHEESE
          </Button>
          <Link to='/cheeses'><Button basic color='red'>CANCEL</Button></Link>
        </Form>
        </>
    );
  }
}

export default EditCheesePage;