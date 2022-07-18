import React from 'react';
// import MongoClient  from 'mongodb';


export default function Banner() {
   
    return (
        <div  className="	   ">
           <div style={{}} className="h-96 grid place-items-center 	bg-cover	 bg-no-repeat   bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0z2Phn1yuLCBpFz9UdFvmIrOFGLsbJ1Y3Q&usqp=CAU')]">
            <div className="text-center justify-center align-center mx-2 md:mx-0  ">


            <div className=" py-4 px-2 grid place-items-center rounded  shadow-md md:flex-row bg-slate-50 ">
            
            <div className="text-3xl font-black">লাইফ ইস নাথিং বাট আ সিরিজ অফ রেইসেস</div> 
             <br/>
             <p className="text-4xl font-medium">--শ্রী শ্রী শুভ কৈরী</p>
             <br/>
             <button  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
             <a target="_blank" href="https://shuvokoiri.netlify.app/">
              About Me
              </a>
              
              </button>
                    </div>



            </div>
            </div>
        
        </div>
    );
};