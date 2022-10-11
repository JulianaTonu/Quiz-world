import React from 'react';

const Blog = () => {
    return (
        <div>
            
            <h1 className='text-center mt-5'>Here Are Some Questions with Answers</h1>

    <div class="container ">

        <div class="p-3">
            <div class="p-2">
              <h5>1.What is the purpose of react router?</h5>
              <p>Ans:React router, and dynamic , client-side routing, allows us to build a single page web application with navigation without the page refreshing as the user navigates.React router uses component structure to call components,which display the appropriate information. </p>
            </div>
         
            <div class="p-2">
              <h5>2. How does Context API works ? </h5>
              <p>Ans :React.createContext() is all we need .It returns a comsumer and provider. Provider is a component that as its names suggests provides the state to its Children.It will hold the "store"and be the parent of all components that might need that store.  
              </p>
            </div>
           
            <div class="p-2">
              <h5>3. write about React UseRef Hook </h5>
              <p>Ans : The useRef Hook allows us to presist values between renders.It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
    </p>
                
              
            </div>
           
    

        </div>
        </div>
        </div>
    );
};

export default Blog;