import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
Axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNDE1ZGM0YjEwOWY5OTFkNjhjOTdhYjEzMTdlZDIxYTgyOGM4ODEzMTkyYWZkZmE1MDFmYTNjMzQ0NTQ1OWU0NmEyNDBmODg0NzZmZjg4OTIiLCJpYXQiOjE2MTE4NTM3ODMsIm5iZiI6MTYxMTg1Mzc4MywiZXhwIjoxNjQzMzg5NzgzLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.L3ic0pdLYxino0sYGmaap19TwYefnz3_If4tl5RIY6aGCDWi-5aVCxoy9kWAWIQ5Vgb2VXUiHzqszI12nmAVHn3pXXH2iff8ffTeogcPiAcX2-70vnu7_B9mCCB64RgvMMkoa6jnp7WnP0NSu8cevDG1lfEGoqztGR8TH0hRuz4tEEShelEAsTxI5VDrHuWfgItggG-sRnbzqwA6LYTIGwGsFPPTAD3A3a_G91YP11510Bldcfb69Ox_AfxIWWZDZUE7zuZ0KUA-Y8I-4jY2N_RdDgnwTvNI0XDIClXxo5F8c5NqUxAr1qxWSzZaD0mkYci9Tjy0Y8CIH5IoqPKm-o4G6xpxSxBTuXkPIzZ1vvPlarSK8v5Cg9HSbVABW6g-H-s07_yq4pNgwk2EH911KmqrkftUMvchBCiNh9oLRtKR-vdYGNn8QpRbcmCM9i2sWq93i-aNYxHqo6sb0MgmccPk8vlrTSq6K2ms2oYUk3PAgWKLBoBz79RiWjTvjEr9XrV2a5l2JGuvh3CzLg8DHR7jjfVz2K7VVWzplhoVfiNoaOmXsri5Nif2LDJvfI01cYcoigUkmNMu6yQAe-PpN8DNvxaMRQ7gxdTQaLiEcLV7xJExFp4l-t_tg-ojH7hblKlRKtu4h_qmABqcR1LtrK_OGUX7YN6j8XOZSFm2E64';
Axios.defaults.headers.post['Content-Type'] = 'application/json';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
