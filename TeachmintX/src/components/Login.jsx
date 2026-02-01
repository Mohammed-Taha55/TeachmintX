import { Link } from "react-router-dom"
export default function Login(){
    return(
        <div className="min-h-screen flex justify-center items-center bg-blue-100">
         <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
               <h1 className="text-center text-blue-500 text-2xl font font-semibold">TeachmintX</h1>
               <form className="space-y-6">
                <div>
                    <label className="text-sm text-gray-700 mb-1">Name</label>
                    <input type="text" required placeholder="Enter your name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded"/>
                </div>
                 <div>
                    <label className="text-sm text-gray-700 mb-1">Email</label>
                    <input type="email" required placeholder="Enter your email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded"/>
                </div>
                 <div>
                    <label className="text-sm text-gray-700 mb-1">Password</label>
                    <input type="text" required placeholder="Enter your password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded"/>
                </div>
                <div className="flex justify-center">
                    <Link to="/"><button className="bg-blue-500 text-white py-2 px-6 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors ">Login</button></Link>
                    </div>
               </form>
         </div>
        </div>
    )
}