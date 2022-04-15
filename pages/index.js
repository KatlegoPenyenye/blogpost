import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      
     
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
                <h1 className="transition duration-700 mb-7 cursor-pointer hover:text-blue-600 text-3xl font-semibold">
                    Full Stack Engineering
                </h1>
                <div className="lg:flex text-justify items-center justify-start mb-8 w-full">
                  Software Engineer with a demonstrated history of information technology and services. Skilled in Android Development, MongoDB, Python (Programming Language), Go C++, and Swagger API. Strong engineering professional with a Bachelor of Science focused in Computer Science and Computational and Applied Mathematics from University of the Witwatersrand.
                </div>
                <div className="lg:flex text-justify items-center justify-start mb-8 w-full">
                Strong organizational and project management skills following best practices such as file structuring for future code changes and easy team work, able to effectively refactor code and remove all bugs . Proficiency with fundamental front-end languages such as HTML, CSS, tailwindcss , bootstrap, and vue. Skilled with JavaScript frameworks such as Angular JS, React JS, next JS and Amber. Skilled in managing NoSQL and SQL databases such as mongoDB, MySQL and a Strong foundation of server programming using languages such as PHP, JavaSript(express servers) also using APIs such as GraphCMS, Stream chat, twilio to the greatest possible advantage. Skilled with web sockets, able to build chat applications that executes CRUD( Create Read Update Delete), also mastering MERN stack projects following the redux flow, from actions for backend API calls, dispatching routes and reducers for managing dispatch results. Skilled in building secure databases and backend servers using best practices such as a folder structure that follows the redux flow, e.g creating models for database schemas, middlewares for further verifications and routes listening for requests or posts from the front end/client side and also controllers for handling these calls.
                 
                </div>



                <h1 className="transition duration-700 mb-7 cursor-pointer hover:text-blue-600 text-3xl font-semibold">
                  Wits  Software Design Tutor 
                </h1>
                <div className="lg:flex text-justify items-center justify-start mb-1 w-full">
                ❖ Teaching students how to develop, test and implement new software programs.
                </div>
                <div className="lg:flex text-justify items-center justify-start mb-1 w-full">
                ❖ Teaching students how to resolve complex technical design issues.
                </div>
                <div className="lg:flex text-justify items-center justify-start mb-1 w-full">
                ❖ Teaching students strong problem solving and decision making skills while using good judgment.
                </div>
                <div className="lg:flex text-justify items-center justify-start mb-1 w-full">
                ❖ Teaching students how to make good technical decisions that provide solutions to business challenges.
                </div> 
          </div>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
           <FeaturedPosts />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

