import React from 'react';
import axios from 'axios';

export default class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state =  { companies: [] };
    }

    render() {
        const rendercompanies = this.state.companies.map((c) =>
            <tr>
                <td>{c.name}</td>
                <td>{c.email}</td>
            </tr>
        );
        return (
        <div>
            <h1>Customers!</h1>
            <table>
                <thead>

                </thead>
                <tbody>
                    {rendercompanies}
                </tbody>
            </table>
        </div>
            );
    }

    componentDidMount() {
        axios.get('http://firebootcamp-crm-api.azurewebsites.net/api/company')
        .then(res => {
          const c = res.data;
          this.setState({ companies: c });
        })
    }
}

