export default function Footer(){
    return(
        <section id="contact">
            <div className="border-t-2 mt-10 p-8 max-w-6xl mx-auto bg-blue-100">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Location</h2>
                    <p className="text-sm text-gray-700 mb-1">Bengaluru</p>
                     <p className="text-sm text-gray-700 mb-1">5th Floor, North Wing,</p>
                       <p className="text-sm text-gray-700 mb-1">SJR The Hub, Sarjapur Main Road,</p>
                         <p className="text-sm text-gray-700 mb-1">Bengaluru - 560103, Karnataka, India</p>
                </div>
                <div>
                       <h2 className="text-2xl font-semibold mb-2">Contact us</h2>
                       <p className="text-sm text-blue-500 mb-1">080-35073710</p>
                       <p className="text-sm text-gray-700 mb-1">(IST 8 AM - 8 PM Everyday)</p>
                       <p className="text-sm text-gray-700 mb-1">support@teachmint.com</p>
                       <p className="text-sm text-gray-700 mb-1">080-35073710</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Connect with us</h2>
                    <div className="flex gap-3">
                        <a href="">
                            <img src="linkedin-svgrepo-com (2).svg" alt="" className="w-6"/>
                        </a>
                         <a href="">
                            <img src="instagram_icon.svg" alt="" className="w-5 invert mt-0.5"/>
                        </a>
                        <a href="">
                            <img src="facebook.png" alt="" className="w-5.5"/>
                        </a>
                        <a href="">
                            <img src="gmail.svg" alt="" className="w-5.5"/>
                        </a>
                    </div>
                </div>
             </div>
                  <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-2">
            <img src="/logo.svg" alt="" className="bg-gray-600 px-2 py-1 rounded-lg md:w-40 w-30"/>
            <p className="text-sm text-gray-800 text-center">
              © Copyright 2026, Teachmint Technologies Pvt. Ltd.
            </p>
            <p className="text-sm text-blue-500">
              Designed by Taha~
            </p>
                  </div>
            </div>
        </section>
    )
}