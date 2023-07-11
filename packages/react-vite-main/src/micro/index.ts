import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'MicroApp', // app name registered
    entry: 'http://localhost:8080/',
    container: '#iframe',
    activeRule: '/vue-child',
  },
]);
export default start