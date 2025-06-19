const express = require('express')

const getCredentials = (req, res) => {
    const Credentials = { "username": "Tushar", "password": "2001" }
    res.status(200).json(Credentials)
}

module.exports = { getCredentials }