const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use('/shrink', createProxyMiddleware({ target: 'https://api.tinify.com', changeOrigin: true,onProxyReq:(proxyReq)=>{
    proxyReq.setHeader('authorization','Basic YXBpOlRQUmg0RlpRWkhQTmpOUW5WTlhYWjNjSnh5eWJGVGgy');
    proxyReq.setHeader('Content-type','application/json');
}}));
app.listen(PORT);
