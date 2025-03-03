import React, { Component } from 'react';

class ValidationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { errmsg: '' };
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const hobbies = form.querySelectorAll('input[name="hobby"]:checked');
        const city = form.querySelector('select').value;

        if (form.name.value.length < 5) {
            this.setState({ errmsg: 'Name must be at least 5 characters long' });
        } else if (form.surname.value.length < 5) {
            this.setState({ errmsg: 'Surname must be at least 5 characters long' });
        } else if (form.mob.value.length < 10) {
            this.setState({ errmsg: 'Mobile must be at least 10 characters long' });
        } else if (form.email.value.length < 5 || form.email.value.indexOf('@') === -1 || form.email.value.indexOf('.') === -1) {
            this.setState({ errmsg: 'Email must be at least 5 characters long' });
        } else if (form.pass.value.length < 8) {
            this.setState({ errmsg: 'Password must be at least 8 characters long' });
        } else if (!city) {
            this.setState({ errmsg: 'Please select a city' });
        } else if (hobbies.length === 0) {
            this.setState({ errmsg: 'Please select at least one hobby' });
        } else {
            this.setState({ errmsg: '' });
            alert('Form submitted successfully!');
            form.reset();
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    Name: <input type="text" name='name' /><br />
                    SurName: <input type="text" name='surname' /><br />
                    Mobile: <input type="number" name='mob' /><br />
                    Email: <input type="email" name='email' /><br />
                    Password: <input type="password" name='pass' /><br />
                    Gender:
                    <div>
                        Male: <input type="radio" name="gender" value="Male" />
                        Female: <input type="radio" name="gender" value="Female" />
                    </div>
                    <br />
                    City: <select name="city">
                        <option value="">Select a city</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                    <br />
                    Hobby:
                    <div>
                        Cricket: <input type="checkbox" name="hobby" value="Cricket" />
                        Football: <input type="checkbox" name="hobby" value="Football" />
                    </div>
                    <br />
                    <button>Submit</button>
                </form>
                <h1 style={{ color: 'red' }}>{this.state.errmsg}</h1>
            </>
        );
    }
}

export default ValidationForm;
