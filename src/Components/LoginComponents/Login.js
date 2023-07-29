import React from 'react';

export const Login = () => {
    
        const [msg, setMsg] = useState('');

        const handleSubmit = (event) => {
            event.preventDefault();
            if (!msg) {
                alert("Post cannot be blank");
            } else {
                loggedin(msg);
                setMsg("");
            }
        };

        return (
            <div className="shadow-lg shadow-gray-600 rounded-sm py-12 bg-rose-600 container mt-32 flex items-center justify-center">
                <div className="left mr-36 w-1/2  py-36 relative left-36">
                    <p className="text-7xl ml-3 mb-2 text-white text font-mono">HopeHub</p>
                    <p className="text-3xl ml-3 italic font-semibold text-yellow-400">Uniting for a better tomorrow!</p>

                </div>
                <div className="right shadow-lg   mr-10 flex flex-col bg-white p-10 rounded-xl w-1/4 relative">
                    <form onSubmit={handleSubmit}>
                        <input className="outline-red-600 px-4 h-12 my-2 border-2 border-gray-300 rounded-3xl " type="text" placeholder="Email Address or Phone Number"></input>
                        <input className="outline-red-600 px-4 h-12 my-2 border-2 border-gray-300 rounded-3xl " type="password" placeholder="Password"></input>
                        <button className="bg-red-600 p-2 text-white my-2 rounded-3xl font-bold text-lg cursor-pointer hover:bg-red-700  ">Log In</button>
                        <span className="text-red-600 text-center my-3 hover:underline cursor-pointer">Forgotten Password?</span>
                        <hr className="my-2"></hr>
                        <button className="bg-amber-400 border-2 hover:bg-yellow-500 hover:border-gray-400 hover:border-2 p-3 text-white my-3 rounded-3xl font-bold text-lg cursor-pointer w-fit mx-auto">Create New Account</button>
                    </form>
                    <span className="absolute -bottom-8 text-sm hover:underline cursor-pointer"><span className="font-bold">Create a page</span> for a Trust, NGO or Charity.</span>
                </div>
            </div>
        );
    };
