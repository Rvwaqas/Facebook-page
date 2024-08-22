import Image from "next/image";

export default function Home() {
  return (
  <>
  <div className="bg-gray-100 h-screen flex items-center justify-center">
    <div className="text-2xl w-1/2 px-12"> 
      <Image  src={"/picture/a.svg"}  width={300} height={200} alt="Facebook Logo" />
      <p className="ml-8 -mt-3">Facebook helps you connect and share with the people in your life</p>

    </div>
    <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">
      <input className="focus:outline-1 outline-blue-600 my-2 border-1 border-gray-100 p-3 " type="text" placeholder="Email address or phone Number" />
      <input className="focus:outline-1 outline-blue-600 my-2 border-1 border-gray-100 p-3" type="password" placeholder="Enter your password"/>
      <button className="bg-blue-600 my-2 p-2 rounded-lg text-lg text-white font-bold hover:bg-blue-800">Login</button>
      <p className="cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline">Forgotten Password?</p>
      <span className="my-2"> <hr/> </span>
      <button className="bg-green-600 my-2 p-2 rounded-md text-lg text-white font-bold hover:bg-green-700 w-fit mx-auto ">Create New Account</button>
    </div>

  </div>
  
  
  </>
  );
}
