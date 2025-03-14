import Link from "next/link";
import Image from "next/image";

const Navbar = async () => {
    return (
        <header className="sticky top-0 md:px-8 pt-5  backdrop-blur-md bg-opacity-70 z-10">
                <div className='  md:mx-5 mx-3 md:px-1 lg:mx-1  flex justify-start md:justify-between items-center'>
                    <Link href={"/"}>
                        <Image
                            src={'/assets/aass.png'}
                            alt="AASS" width={110} height={110} />
                    </Link>
                    <ul className="flex lg:space-x-16 md:space-x-7   mr-10 md:mr-0 font-semibold">
                    </ul>
                   <div>
                   <div className='flex items-center space-x-3 ml-20 lg:ml-0'>
                    <div>
                        <Link href={"https://www.facebook.com/aridianarray"}>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" fill="#172554" /> </svg>
                        </Link>

                    </div>
                    <div>
                        <Link href={" https://x.com/AridianArray"}>
                        
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.875 0.875C7.59152 0.875 0.875 7.59152 0.875 15.875C0.875 24.1585 7.59152 30.875 15.875 30.875C24.1585 30.875 30.875 24.1585 30.875 15.875C30.875 7.59152 24.1585 0.875 15.875 0.875ZM23.0837 12.1819C23.0937 12.3393 23.0937 12.5033 23.0937 12.6641C23.0937 17.5792 19.3504 23.2411 12.51 23.2411C10.4007 23.2411 8.44531 22.6283 6.79799 21.5737C7.09933 21.6071 7.38728 21.6205 7.69531 21.6205C9.43638 21.6205 11.0368 21.0312 12.3125 20.0335C10.6786 20 9.3058 18.9286 8.83705 17.4554C9.4096 17.5391 9.92522 17.5391 10.5145 17.3884C9.67319 17.2175 8.91699 16.7605 8.37438 16.0953C7.83178 15.43 7.53623 14.5973 7.53795 13.7388V13.692C8.03013 13.9699 8.60938 14.1406 9.2154 14.1641C8.70595 13.8245 8.28814 13.3645 7.99903 12.8249C7.70993 12.2852 7.55845 11.6825 7.55804 11.0703C7.55804 10.3772 7.73884 9.74442 8.06362 9.19531C8.99744 10.3449 10.1627 11.2851 11.4837 11.9548C12.8047 12.6245 14.2518 13.0088 15.731 13.0826C15.2054 10.5547 17.0938 8.50893 19.3638 8.50893C20.4353 8.50893 21.3996 8.95759 22.0792 9.6808C22.9196 9.52344 23.7232 9.2087 24.4397 8.78683C24.1618 9.64732 23.5792 10.3739 22.8058 10.8326C23.5558 10.7522 24.279 10.5446 24.9487 10.2533C24.4431 10.9967 23.8103 11.6562 23.0837 12.1819Z" fill="#172554" />
                        </svg>
                        </Link>

                    </div>
                    <div>
                        <Link href={"https://www.linkedin.com/company/aridian-array-software-society/"}>
                        
                        <svg width="32" height="32" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0001 0.599976C7.0471 0.599976 0.600098 7.04698 0.600098 15C0.600098 22.953 7.0471 29.4 15.0001 29.4C22.9531 29.4 29.4001 22.953 29.4001 15C29.4001 7.04698 22.9531 0.599976 15.0001 0.599976ZM11.4751 20.9685H8.5591V11.5845H11.4751V20.9685ZM9.9991 10.4325C9.0781 10.4325 8.4826 9.77997 8.4826 8.97297C8.4826 8.14948 9.0961 7.51648 10.0366 7.51648C10.9771 7.51648 11.5531 8.14948 11.5711 8.97297C11.5711 9.77997 10.9771 10.4325 9.9991 10.4325ZM22.1251 20.9685H19.2091V15.768C19.2091 14.5575 18.7861 13.7355 17.7316 13.7355C16.9261 13.7355 16.4476 14.292 16.2361 14.8275C16.1581 15.018 16.1386 15.288 16.1386 15.5565V20.967H13.2211V14.577C13.2211 13.4055 13.1836 12.426 13.1446 11.583H15.6781L15.8116 12.8865H15.8701C16.2541 12.2745 17.1946 11.3715 18.7681 11.3715C20.6866 11.3715 22.1251 12.657 22.1251 15.42V20.9685Z" fill="#172554" />
                        </svg>
                        </Link>
                    </div>
                </div>
                   </div>
                </div>
        </header>
    )
}

export default Navbar