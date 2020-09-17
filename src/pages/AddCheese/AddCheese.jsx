import React, {Component} from 'react';

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

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    // We will write the handleAddCheese function in our App.js after this step...
    this.props.handleAddCheese(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };


  render() {
    return (
        <>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <h1>Add Cheese</h1>
          <div className="form-group">
            <label>Cheese Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Category(required)</label>
            <input
              className="form-control"
              name="category"
              value={this.state.formData.category}
              onChange={this.handleChange}
              required
            />
            </div>
          <div className="form-group">
            <label>Country</label>
            <input
              className="form-control"
              name="country"
              value={this.state.formData.country}
              onChange={this.handleChange}
            />
            </div>
          <div className="form-group">
            <label>Brand</label>
            <input
              className="form-control"
              name="brand"
              value={this.state.formData.brand}
              onChange={this.handleChange}
            />
            </div>
          <div className="form-group">
            <label>Color</label>
            <input
              className="form-control"
              name="color"
              value={this.state.formData.color}
              onChange={this.handleChange}
            />
            </div>
          <div className="form-group">
            <label>Firmness (required)</label>
            <input
              className="form-control"
              name="firmness"
              value={this.state.formData.firmness}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Mould </label>
            <input
              className="form-control"
              name="mould"
              value={this.state.formData.mould}
              onChange={this.handleChange}
            />
            </div>
          <div className="form-group">
            <label>Gas Holes </label>
            <input
              className="form-control"
              name="gasHoles"
              value={this.state.formData.gasHoles}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Texture </label>
            <input
              className="form-control"
              name="texture"
              value={this.state.formData.texture}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              className="form-control"
              name="image"
              value={this.state.formData.image}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD CHEESE
          </button>
        </form>
        </>
    );
  }
}

export default AddCheese;