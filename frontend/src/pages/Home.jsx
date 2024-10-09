import { Button } from "../components/button";

const Home = () => {
    const handleLogout = () => {
        console.log('handle logout');
    }
    return(
        <div className='w-full flex justify-center items-center h-screen '>
            <div className='text-center'>
                <h1 className="pb-2">Welcome to the App</h1>
                <Button onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    )
}
export default Home;