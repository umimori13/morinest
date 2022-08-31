
export default {
    npmClient: 'yarn',
    apiRoute: {
      platform: 'vercel'
    },
    routes: [
      { path: '/', component: 'index' },
      
    ],
    plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
    tailwindcss: {}
  };