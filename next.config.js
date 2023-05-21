// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
  
// }

// module.exports = nextConfig


// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Find the existing JavaScript rule
//     const jsRule = config.module.rules.find(rule =>
//       rule.test && rule.test.test('.js')
//     );

//     // Replace the existing JavaScript rule with babel-loader
//     config.module.rules = [
//       ...config.module.rules.filter(rule => rule !== jsRule),
//       {
//         ...jsRule,
//         use: [
//           defaultLoaders.babel,
//           {
//             loader: 'babel-loader',
//             options: {
//               presets: [
//                 [
//                   '@babel/preset-env',
//                   {
//                     modules: false
//                   }
//                 ]
//               ]
//             }
//           }
//         ]
//       }
//     ];

//     return config;
//   }
// };



/** @type {import('next').NextConfig} */
// see https://github.com/martpie/next-transpile-modules#readme
const withTM = require('next-transpile-modules')(['private-lib']);

module.exports = withTM({
  reactStrictMode: true,
  env: {
  },
})