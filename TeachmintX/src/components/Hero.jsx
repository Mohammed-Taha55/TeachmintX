// export default function Hero() {
//   return (
//     <section className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-5">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <div className="space-y-6">
//             <div className="inline-block">
//               <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
//                 🚀 Education Made Simple
//               </span>
//             </div>
            
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
//               Empower Your
//               <span className="text-blue-500"> Teaching</span>
//               <br />
//               Journey
//             </h1>
            
//             <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
//               Join thousands of educators transforming their classrooms with TeachmintX. 
//               Manage classes, track attendance, engage students, and streamline your entire teaching workflow.
//             </p>
            
//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4 pt-4">
//               <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl">
//                 Get Started Free
//               </button>
//               <button className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">
//                 Watch Demo
//               </button>
//             </div>
            
//             {/* Stats */}
//             <div className="flex flex-wrap gap-8 pt-8">
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-900">10M+</h3>
//                 <p className="text-gray-600">Active Users</p>
//               </div>
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-900">50K+</h3>
//                 <p className="text-gray-600">Schools</p>
//               </div>
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-900">150+</h3>
//                 <p className="text-gray-600">Countries</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Right Content - Image/Illustration */}
//           <div className="relative">
//             <div className="relative z-10">
//               <img 
//                 src="/teachmint-x1-pro.png" 
//                 alt="TeachmintX Platform Dashboard" 
//                 className="rounded-2xl shadow-2xl w-full"
//               />
              
//               {/* Floating Cards */}
//               <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden lg:block">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                     <span className="text-2xl">✓</span>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Attendance</p>
//                     <p className="text-sm text-gray-600">98% Today</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden lg:block">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <span className="text-2xl">📚</span>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Assignments</p>
//                     <p className="text-sm text-gray-600">24 Submitted</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Background Decoration */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 -z-10"></div>
//           </div>
          
//         </div>
//         {/* Trusted By Section */}
//         <div className="mt-20 text-center">
//           <p className="text-gray-500 mb-8">Trusted by leading educational institutions</p>
//           <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
//             <img src="/logo1.png" alt="Partner 1" className="h-8 grayscale hover:grayscale-0 transition-all" />
//             <img src="/logo2.png" alt="Partner 2" className="h-8 grayscale hover:grayscale-0 transition-all" />
//             <img src="/logo3.png" alt="Partner 3" className="h-8 grayscale hover:grayscale-0 transition-all" />
//             <img src="/logo4.png" alt="Partner 4" className="h-8 grayscale hover:grayscale-0 transition-all" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







export default function Hero(){
    return(
     <section id="hero">
       <div className="min-h-screen mt-30 max-w-6xl mx-auto">
         <div className="bg-blue-200 rounded-full px-3 py-1 w-50 ml-5">
         <h2 className="cursor-pointer text-gray-700 hover:text-blue-600 font-semibold">🚀Let's Boost Learning</h2>
         </div>
         <div className="grid md:grid-cols-2 gap-5 items-center">
         <div>
          <div className="space-y-8">
             <h1 className="2xl:text-7xl tracking-wide xl:text-6xl md:text-6xl text-5xl font-bold p-5">
              Empower your
              <span className="text-blue-500 ml-2">Teaching</span>
              <br/>
              Journey
       
             </h1>
         </div>
       
         <p className="text-lg md:text-xl text-gray-600 p-5 tracking-wide">
           Join thousands of educators transforming their classrooms with <span className="text-blue-500 text-lg font-semibold">TeachmintX</span>.
           Manage classes, track attendance, engage students, and streamline your entire teaching workflow.
         </p>
         <div className="flex flex-wrap gap-4 p-5">
           <button className="bg-blue-500 px-8 py-4 rounded-xl text-white hover:scale-x-105 transition-all font-semibold">Get started</button>
           <button className="bg-blue-100 px-8 py-4 rounded-xl text-blue-500 border-blue-500 border-2 hover:bg-blue-200 hover:scale-x-105 transition-all font-semibold">Watch demo</button>
         </div>
       <div className="flex flex-wrap gap-12 p-5 pt-8">
         <div>
           <h3 className="text-3xl font-bold text-gray-900">10M+</h3>
           <p className="text-gray-600">Active users</p>
         </div>
         <div>
         <h3 className="text-3xl font-bold text-gray-900">50K+</h3>
         <p className="text-gray-600">Schools</p>
         </div>
         <div>
           <h3 className="text-3xl font-bold text-gray-900">100+</h3>
           <p className="text-gray-600">Countries</p>
         </div>
       </div>
         </div>
          <div><img src="/teachmint-x1-pro.png" alt="" className="w-100 max-w-xl md:w-full shadow-xl rounded-lg m-5 p-6"/></div>
         </div>
       </div>
     </section>
    )
}



