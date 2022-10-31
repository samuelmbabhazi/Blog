const express = require('express');
const pg = require('pg');

const con = new pg.Client({
    user: 'postgres',
    database: 'byjozjqutgdmwrmfnxjh',
    password:'UVuCYJrDXN1Ryfc1',
    port:'5432',
    host: 'byjozjqutgdmwrmfnxjh.db.eu-central-1.nhost.run',
})
con
    .connect()
    .then(() => {
        console.log('Connexion à la BD réussie');
    }).catch((err) => {
        console.error(err);
        process.exit(0);
    });

module.exports=con;