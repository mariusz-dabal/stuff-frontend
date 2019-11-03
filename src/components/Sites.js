import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sites = () => {
    const [sites, setSites] = useState([]);

    useEffect(() => {
        fetchSites();
    }, []);

   const fetchSites = () => {
    const token = localStorage.getItem('access_token');
        axios({
            method: 'get',
            url: 'http://jimmyspage.pl/api/sites',
            headers: {
                'Accept': 'application/json',
                'Authorization' : 'Bearer ' + token,
            },
          }).then(res => {
                const sites = res.data;
                setSites(sites);
                console.log(sites);
          }).catch(error => {
              console.log(error);
          });
   };
    return (
        <React.Fragment>
            <h1>Users Sites</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">url</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    { sites.map(site => (
                        <tr key={site.id}>
                            <td>{site.id}</td>
                            <td>{site.name}</td>
                            <td>{site.url}</td>
                            <td>{site.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default Sites;