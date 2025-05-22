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
import { type PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, CalendarDays, MapPin } from 'lucide-react';

export default function MainLayout({ children }: PropsWithChildren) {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();
    const currentPath = window.location.pathname;
    return(
        <main>
            <Head>
                <title>ID-tix</title>
                <link rel='icon' href={Logo} />
            </Head>
            <header>
                <div className="fixed h-16 w-full bg-blue-200 dark:bg-main flex items-center justify-center p-8 border-b border-main2">
                    <div className="flex w-full max-w-7xl items-center justify-between">
                        <div className='h-full flex items-center justify-center'>
                            <Link href={route('home')}>
                                <img src={Logo} alt="" className='w-11' />
                            </Link>
                        </div>
                        <div className='flex flex-row gap-6'>
                            <Link href={route('home')}>
                                <div className={cn('flex flex-row gap-1 border p-1 text-main2 hover:text-white hover:border-white border-main rounded-lg', {'text-orange-500': currentPath === '/',})}>
                                    <ChevronDown />
                                    <h1 className='font-semibold'>Now Showing</h1>
                                </div>
                            </Link>
                            <Link href={route('index2')}>
                            <div className={cn('flex flex-row gap-1 border p-1 text-main2 hover:text-white hover:border-white border-main rounded-lg', {'text-orange-500': currentPath === '/Comming-Soon',})}>
                                    <CalendarDays />
                                    <h1 className='font-semibold'>Comming Soon</h1>
                                </div>
                            </Link>
                            <Link href={route('theater')}>
                            <div className={cn('flex flex-row gap-1 border p-1 text-main2 hover:text-white hover:border-white border-main rounded-lg', {'text-orange-500': currentPath === '/theater',})}>
                                    {/* <img src={Location} alt="" /> */}
                                    <MapPin />
                                    <h1 className='font-semibold'>Theater</h1>
                                </div>
                            </Link>
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
                                    <div className='flex flex-row gap-4 items-center'>
                                        <Link
                                            href={route('login')}
                                            // className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                            className='font-semibold text-main2 hover:text-white'
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            // className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                            className='font-semibold text-main2 border-main2 border rounded-md px-3 py-1 hover:text-white hover:hover:border-white'
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="h-16"></div>
            </header>
            <div>{children}</div>
        </main>
    )
}