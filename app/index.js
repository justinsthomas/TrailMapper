import _ from 'lodash';

console.log('webpack is working');

if (module.hot) {
    module.hot.accept();
}
