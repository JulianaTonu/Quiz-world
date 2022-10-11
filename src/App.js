
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Home from './components/Home/Home';


function App() {
  const router = createBrowserRouter([

    {path:'/',
    element:<Main></Main>, 
    children:[
      {path:'/',
      
     element:<Home></Home>},

     {path:'/home',
     loader: async()=>{
      return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
     element:<Home></Home>},

    //  {path:'/topics',
    //  loader: async()=>{
    //   return fetch(`https://openapi.programming-hero.com/api/quiz`)
    //       },
    //  element:<Topics></Topics>},

    ]},
    
  ])

  return (
    <div className="App">
      
      <RouterProvider router={router}>

      </RouterProvider>
    
    </div>
  );
}

export default App;
