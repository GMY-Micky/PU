import React from 'react';
import "../css/departments.css"

const Departments = () => {
  return <div className='departments'>
      <div className='dep-1'>
        <img src="/assets/punjab-university-lahore-logo.png" alt="Punjab University Logo" /><br/>
        <span className='department-name'>Department of Computer Science</span>
      </div>
      <div className='dep-2'>
      <img src="/assets/punjab-university-lahore-logo.png" alt="Punjab University Logo" /><br/>
      <span className='department-name'>Department of Software Engineering</span>
      </div>
      <div className='dep-3'>
      <img src="/assets/punjab-university-lahore-logo.png" alt="Punjab University Logo" /><br/>
      <span className='department-name'>Department of Information Technology</span> 
      </div>
      <div className='dep-4'>
      <img src="/assets/punjab-university-lahore-logo.png" alt="Punjab University Logo" /><br/>
      <span className='department-name'>Department of Data Science</span>
      </div>
  </div>;
};

export default Departments;
