import Logo from '@/assets/Logo.svg';
import Arrow from '@/assets/Arrow.svg'
import Calendar from '@/assets/Calendar.svg'
import Location from '@/assets/Location.svg'
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserMenuContent } from '@/components/user-menu-content';
import { useInitials } from '@/hooks/use-initials';

export default function MainLayout(){
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();
    return(
        <header>
            <div className="fixed h-16 w-full bg-blue-200 dark:bg-main flex items-center justify-center p-8">
                <div className="flex w-full max-w-7xl items-center justify-between">
                    <div><img src={Logo} alt="" /></div>
                    <div className='flex flex-row gap-6'>
                        <a href={route('home')}>
                            <div className='flex flex-row gap-2'>
                                <img src={Arrow} alt="" />
                                <h1>Now Showing</h1>
                            </div>
                        </a>
                        <a href={route('dashboard')}>
                            <div className='flex flex-row gap-2'>
                                <img src={Calendar} alt="" />
                                <h1>Comming Soon</h1>
                            </div>
                        </a>
                        <a href={route('theater')}>
                            <div className='flex flex-row gap-2'>
                                <img src={Location} alt="" />
                                <h1>Theater</h1>
                            </div>
                        </a>
                    </div>
                    <div>
                    {auth.user ? (
                            // <Link
                            //     href={route('dashboard')}
                            //     className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            // >
                            //     Dashboard
                            // </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="size-10 rounded-full p-1">
                                        <Avatar className="size-8 overflow-hidden rounded-full">
                                            <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                                            <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                                {getInitials(auth.user.name)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end">
                                    <UserMenuContent user={auth.user} />
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="h-16"></div>
        </header>
    )
}