export default function Products(){
    return(
        <section id="products">
          <div className="max-w-7xl mx-auto p-4 bg-blue-100">
              <h1 className="text-4xl lg:text-5xl font-semibold text-center p-8">Products</h1>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-300 rounded-xl px-8 py-4 shadow-md hover:shadow-2xl transition-colors">
                 <img src="/teachmintx2pro.webp" alt="" />
                 <h3 className="text-xl font-semibold text-center p-2">Teachmint X2 Pro</h3>
                 <p className="text-center text-gray-600 text-lg line-through">₹2,25,000</p>
                 <p className="text-center text-xl text-gray-800">₹1,90,000</p>
            <div className="flex gap-4 md:gap-8 mt-4 ml-4 items-center justify-center">
              <a href="https://cart.teachmint.com/products/75-inch-digital-board-for-teaching-pro"    target="_blank"
            rel="noopener noreferrer"><button className="bg-blue-500 lg:text-lg lg:px-8  px-6 py-1 rounded-xl hover:bg-blue-800 text-white transition-colors cursor-pointer tracking-wide">Buy now</button></a>
              <button className="bg-red-500 lg:text-lg lg:px-8 px-6 py-1 rounded-xl hover:bg-red-700 text-white transition-colors cursor-pointer tracking-wide">Add to cart</button>
              </div>
            </div>
                    <div className="bg-gray-300 rounded-xl px-8 py-4 shadow-md hover:shadow-2xl transition-colors">
                 <img src="/teachmintx2plus.webp" alt="" />
                 <h3 className="text-xl font-semibold text-center p-2">Teachmint X2 Plus</h3>
                 <p className="text-center text-gray-600 text-lg line-through">₹1,95,000</p>
                 <p className="text-center text-xl text-gray-800">₹1,70,000</p>
            <div className="flex gap-4 md:gap-8 mt-4 ml-4 items-center justify-center">
               <a href="https://cart.teachmint.com/products/75-inch-digital-board-for-teaching-pro"    target="_blank"
            rel="noopener noreferrer"><button className="bg-blue-500 lg:text-lg lg:px-8  px-6 py-1 rounded-xl hover:bg-blue-800 text-white transition-colors cursor-pointer tracking-wide">Buy now</button></a>
              <button className="bg-red-500 px-6 py-1 lg:text-lg lg:px-8 rounded-xl hover:bg-red-700 text-white transition-colors cursor-pointer tracking-wide">Add to cart</button>
              </div>
            </div>
                <div className="bg-gray-300 rounded-xl px-8 py-4 shadow-md hover:shadow-2xl transition-colors">
                 <img src="/teachmintx2star.webp" alt="" />
                 <h3 className="text-xl font-semibold text-center p-2">Teachmint X2 Star</h3>
                 <p className="text-center text-gray-600 text-lg line-through">₹1,75,000</p>
                 <p className="text-center text-xl text-gray-800">₹1,65,000</p>
            <div className="flex gap-4 md:gap-8 mt-4 ml-4 items-center justify-center">
              <a href="https://cart.teachmint.com/products/75-inch-digital-board-for-teaching-pro"    target="_blank"
            rel="noopener noreferrer"><button className="bg-blue-500 lg:text-lg lg:px-8  px-6 py-1 rounded-xl hover:bg-blue-800 text-white transition-colors cursor-pointer tracking-wide">Buy now</button></a>
              <button className="bg-red-500 px-6 py-1 rounded-xl lg:text-lg lg:px-8 hover:bg-red-700 text-white transition-colors cursor-pointer tracking-wide">Add to cart</button>
              </div>
            </div>
              <div className="bg-gray-300 rounded-xl px-8 py-4 shadow-md hover:shadow-2xl transition-colors">
                 <img src="/teachmintx2.webp" alt="" />
                 <h3 className="text-xl font-semibold text-center p-2">Teachmint X2 Neo</h3>
                 <p className="text-center text-gray-600 text-lg line-through">₹1,60,000</p>
                 <p className="text-center text-xl text-gray-800">₹1,50,000</p>
            <div className="flex md:gap-8 gap-4 mt-4 ml-4 items-center justify-center">
             <a href="https://cart.teachmint.com/products/75-inch-digital-board-for-teaching-pro"    target="_blank"
            rel="noopener noreferrer"><button className="bg-blue-500 lg:text-lg lg:px-8  px-6 py-1 rounded-xl hover:bg-blue-800 text-white transition-colors cursor-pointer tracking-wide">Buy now</button></a>
              <button className="bg-red-500 px-6 py-1 lg:text-lg lg:px-8 rounded-xl hover:bg-red-700 text-white transition-colors tracking-wide">Add to cart</button>
              </div>
            </div>
          </div>
          </div>
        </section>
    )
}