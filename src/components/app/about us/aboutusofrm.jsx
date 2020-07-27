import React from 'react'

import axios from 'axios';
class AboutUsForm extends React.Component {

    state = {
        username: "",

        password: "",
        time: "this is time"
    }
    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);

    }
    handleChange = async (e) => {
        e.preventDefault();
        var data = await axios.get('/time');
        console.log(data);
        this.setState({
            // [e.target.name]: e.target.value,
            time: data.data.time

        })

        console.log(this.state)

    }


    async componentDidMount() {
        // alert('component mounted');
        // try {
        //     var data = await axios.get('/time');
        //     console.log(data);
        //     this.setState({ time: data.data.time });
        // } catch (error) {

        // }


        // axios.get('/time')
        //     .then(data => {
        //         this.setState({ time: data })

        //     })
        //     .catch(err => {
        //         console.log(err
        //         )
        //     })
    }

    render() {
        return (
            <div>
                <h1>This is about us form</h1>
                <h1>{this.state.time}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                 <input type="text" id="name" name="username" value={this.state.username} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                 <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AboutUsForm;