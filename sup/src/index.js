import React from 'react';
import ReactDOM from 'react-dom';
import complaintServiceWorker from './complaintServiceWorker';
import ComplaintForm from './complaintForm/ComplaintForm';


ReactDOM.render(<ComplaintForm /> , document.getElementById('root'));

complaintServiceWorker();