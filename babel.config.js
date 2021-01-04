const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
      useBuiltIns: 'usage',
      corejs: 3,
      targets: {
        chrome: 70
      }
    }
  ],
  [
    '@babel/preset-react',
    {
      runtime: 'automatic'
    }
  ]
];
const plugins = [
  process.env.NODE_ENV == 'development' && 'react-refresh/babel',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-json-strings',
  '@babel/plugin-proposal-nullish-coalescing-operator'
].filter(Boolean);

module.exports = { presets, plugins };
