const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

 const nextConfig = {
   reactStrictMode: true,
   webpack(config, { isServer }) {
     config.plugins.push(
       new NextFederationPlugin({
         name: 'login',
         filename: 'static/chunks/remoteEntry.js',
         exposes: {
           // specify exposed pages and components
           './LoginPage': './src/pages/login.tsx',
         },
         shared: {
            // specify shared dependencies 
            // read more in Shared Dependencies section
         },
       })
     );

     return config;
   },
 }

 module.exports = nextConfig