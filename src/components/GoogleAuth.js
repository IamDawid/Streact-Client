import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '126821413490-us6pu9sal385tmnnk57d64fctccdtiik.apps.googleusercontent.com',
                scope: 'email'
                });
        });
    }

    render() {
        return <div>Google Auth</div>;
    }

}

export default GoogleAuth;