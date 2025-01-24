import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { roboto } from "../layout";
import { Link } from 'react-router-dom';

export default function LandingPage(){
    return(
        <div className="min-h-screen p-10 flex flex-col bg-[#000000] text-white">
            <div className="flex justify-between">
                <h1 className='font-bold text-2xl'>LOGO</h1>
                
                <a href="https://buy.stripe.com/7sI29j8Dx4Ag2Q05l2">
                    <div className='flex items-center justify-center cursor-pointer text-black rounded-xl w-28 p-2 bg-[#bfbfbf]'>
                        <h1 className='font-medium'>Get MERZ</h1>
                    </div>
                </a>
                
    
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-center mt-7">
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-5'>
                        <h1 className={`${roboto.className} text-4xl text-center lg:text-left font-bold`}>
                        Meet MERZ Wallet,<br/>
                        Sleek. Secure. Smart
                        </h1>

                        <h1 className='text-gray-400 text-center lg:text-left'> Minimalist design, maximum functionality.
                        Your everyday essential redefined</h1>
                    </div>


                    <div className='flex flex-col items-center lg:items-start'>
                        <div className='flex gap-2  '>
                            <CheckCircleOutlineIcon fontSize="small"/>
                            <h1>Hold upto 6 cards</h1>
                        </div>
                        <div className='flex gap-2 '>
                            <CheckCircleOutlineIcon fontSize="small"/>
                            <h1>RFID Blocked</h1>
                        </div>
                        <div className='flex gap-2 '>
                            <CheckCircleOutlineIcon fontSize="small"/>
                            <h1>Cash Strap</h1>
                        </div>
                    </div>
                    
                    <div className='flex items-center justify-center lg:items-start lg:justify-start'>
                        <a href='https://buy.stripe.com/7sI29j8Dx4Ag2Q05l2'>
                            <div className='flex lg:items-start items-center justify-center text-black rounded-xl w-40 p-2 bg-[#bfbfbf]'>
                                <h1 className='font-medium'>Get Yours Today</h1> 
                            </div>
                        </a>
                    </div>   
                    
                    
                </div>
                
                <div>
                    <img src='merz-img.png'/>
                </div>
                
                

            </div>



        </div>
    )
}