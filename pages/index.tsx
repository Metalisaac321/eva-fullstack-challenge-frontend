import Router from "next/router";
import useLogin from "../components/hooks";

const Index = () => {
    const {
        setUserField,
        user,
        handleLoginClick,
        isLoginCorrect,
    } = useLogin()

    if (isLoginCorrect) {
        Router.replace('/bookings');
    }

    return (
        <div className="bg-grey-lighter h-screen font-sans" >
            <div className="container mx-auto h-full flex justify-center items-center">
                <div className="w-1/3">
                    <h1 className="font-hairline mb-6 text-center text-4xl">Login</h1>
                    <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="font-bold text-grey-darker block mb-2">Username or Email</label>
                            <input
                                type="text"
                                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                                placeholder="Your Username"
                                value={user.username}
                                onChange={(event) => setUserField('username', event.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="font-bold text-grey-darker block mb-2">Password</label>
                            <input
                                type="password"
                                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                                placeholder="Your Password"
                                value={user.password}
                                onChange={(event) => setUserField('password', event.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button onClick={handleLoginClick} className="bg-teal-dark hover:bg-teal text-black font-bold py-2 px-4 rounded border">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
