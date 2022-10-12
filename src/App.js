
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
// import QuizDetails from './components/QuizDetails/QuizDetails';
import Quiz from './components/Quiz/Quiz';
import Blog from './components/Blog/Blog';
import QuizChart from './components/QuizChart/QuizChart';


function App() {
  const router = createBrowserRouter([

    {path:'/',
    element:<Main></Main>, 
    children:[
      {path:'/',
     element:<Home></Home>},
      {path:'./',
     element:<Home></Home>},

     {path:'/home',
     loader: async()=>{
      return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
     element:<Home></Home>},

     {path:'/topic/:topicId',
     loader: async({params})=>{
      return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
     },
     element:<Quiz></Quiz> 
        } ,

        {path:'/blog',
      element:<Blog></Blog>},

     {path:'/statics',
     loader: async()=>{
      return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
     element:<QuizChart></QuizChart>},

    ]},
    
    {path:'/*',
  element:<h4>Sorry!!!404 The page is not Found</h4>
}
  ])

  return (
    <div className="App">
      
      <RouterProvider router={router}>

      </RouterProvider>
    
    </div>
  );
}

export default App;
