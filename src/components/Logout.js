import React, { useEffect } from 'react';
import axios from 'axios';

const Logout = (props) => {

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        axios({
            method: 'post',
            url: 'http://stuff.test/api/logout',
            headers: {
                'Accept': 'application/json',
                'Authorization' : 'Bearer ' + token,
            },
          }).then(res => {
            console.log(res);
            localStorage.removeItem('access_token');
            props.history.push('/');
          }).catch(error => {
              console.log(error);
          });
    }, []);

    return true;
};

export default Logout;