import Logo from '@/assets/Logo.svg';
import Instagram from '@/assets/instagram_dark.svg'
import Youtube from '@/assets/youtube.svg'
import Facebook from '@/assets/facebook.svg'
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserMenuContent } from '@/components/user-menu-content';
import { useInitials } from '@/hooks/use-initials';
import { useState, type PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, CalendarDays, MapPin, House, X, Menu } from 'lucide-react';

export default function MainLayout({ children }: PropsWithChildren) {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();
    const currentPath = window.location.pathname;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // function NavLink({ href, isActive, icon, text }) {
    //     return (
    //         <Link href={href}>
    //         <div className={cn(
    //             'flex items-center gap-1 border p-1 text-main2 hover:text-white hover:border-white border-main rounded-lg',
    //             { 'text-orange-500 hover:text-orange-500 hover:border-main': isActive }
    //         )}>
    //             {icon}
    //             <h1 className="font-semibold">{text}</h1>
    //         </div>
    //         </Link>
    //     );
    // }

    // // Komponen link navigasi mobile
    // function MobileNavLink({ href, text }) {
    //     return (
    //         <Link href={href} className="block text-main2 font-semibold text-lg">
    //         {text}
    //         </Link>
    //     );
    // }

    return(
        <main>
            <Head>
                <title>ID-tix</title>
                <link rel='icon' href={Logo} />
            </Head>
            <header>
                <div className="fixed h-16 w-full bg-main flex items-center justify-center p-8 border-b border-main2 z-50">
                    <div className="flex w-full max-w-7xl items-center justify-between">
                        <div className='h-full flex items-center justify-center'>
                            <Link href={route('home')}>
                                <img src={Logo} alt="" className='w-11' />
                            </Link>
                        </div>
                        <div className='hidden md:flex flex-row gap-6'>
                            <Link href={route('home')}>
                                <div className={cn('flex flex-row gap-1 border p-1 text-main2 hover:text-white hover:border-white border-main rounded-lg', {'text-orange-500 hover:text-orange-500 hover:border-main': currentPath === '/',})}>
                                    <House />
                                    <h1 className='font-semibold'>Now Showing</h1>
                                </div>
                            </Link>
                            <Link href={route('index2')}>
                            <div className={cn('flex flex-row gap-1 border p-1 text-main2 hover:text-white hover:border-white border-main rounded-lg', {'text-orange-500 hover:text-orange-500 hover:border-main': currentPath === '/coming-soon',})}>
                                    <CalendarDays />
                                    <h1 className='font-semibold'>Coming Soon</h1>
                                </div>
                            </Link>
                            <Link href={route('theater')}>
                            <div className={cn('flex flex-row gap-1 border p-1 text-main2 hover:text-white hover:border-white border-main rounded-lg', {'text-orange-500 hover:text-orange-500 hover:border-main': currentPath === '/theater',})}>
                                    {/* <img src={Location} alt="" /> */}
                                    <MapPin />
                                    <h1 className='font-semibold'>Theater</h1>
                                </div>
                            </Link>
                        </div>
                        <div className='hidden md:flex'>
                            {auth.user ? (
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
                                            className='font-semibold text-main2 hover:text-white'
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className='font-semibold text-main2 border-main2 border rounded-md px-3 py-1 hover:text-white hover:hover:border-white'
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
                            </button>
                        </div>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-main w-full border-b border-main2 z-40 fixed top-16 left-0 flex flex-col">
                        <div className='px-2 py-1'><Link href={route('home')} className={cn("text-main2 font-semibold hover:text-white hover:bg-orange-500 w-full h-8 rounded-lg flex items-center justify-center", {'text-white bg-orange-700 hover:bg-orange-700': currentPath === '/',})}>Now Showing</Link></div>
                        <div className='px-2 py-1'><Link href={route('index2')} className={cn("text-main2 font-semibold hover:text-white hover:bg-orange-500 w-full h-8 rounded-lg flex items-center justify-center", {'text-white bg-orange-700 hover:bg-orange-700': currentPath === '/coming-soon',})}>Coming Soon</Link></div>
                        <div className='px-2 py-1'><Link href={route('theater')} className={cn("text-main2 font-semibold hover:text-white hover:bg-orange-500 w-full h-8 rounded-lg flex items-center justify-center", {'text-white bg-orange-700 hover:bg-orange-700': currentPath === '/theater',})}>Theater</Link></div>
                        <div className='w-full flex justify-center px-2 py-1'>
                            {auth.user ? (
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
                                <div className="w-full flex flex-col border-t border-main2">
                                    <div className='px-2 py-1'><Link href={route('login')} className="text-main2 font-semibold hover:text-white hover:bg-orange-500 w-full h-8 rounded-lg flex items-center justify-center">Log In</Link></div>
                                    <div className='px-2 py-1'><Link href={route('register')} className="text-main2 font-semibold hover:text-white hover:bg-orange-500 w-full h-8 rounded-lg flex items-center justify-center">Register</Link></div>
                                </div>
                                
                                /* <Link href={route('login')} className="text-main2">Log in</Link>
                                <Link href={route('register')} className="text-main2 border border-main2 rounded-md px-3 py-1">Register</Link> */
                            )}
                        </div>
                    </div>
                )}
                <div className="h-10"></div>
            </header>
            <div>{children}</div>
            <footer className={cn('bg-gray-950 h-60 w-full flex justify-center items-center p-8' , {' hidden': currentPath.startsWith('/settings/') || currentPath.includes('/schedules/') || currentPath.includes('/ticket/')})}>
                <div className='w-7xl flex justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex gap-4 items-center mb-4'>
                            <img src={Logo} alt="ID-tix Logo"  className='size-14'/>
                            <h1 className='text-xl font-bold text-white'>ID-tix</h1>
                        </div>
                        {/* <div className='font-semibold text-gray-300'>
                            descipsi
                        </div> */}
                        <div className='flex gap-4'>
                            <a href="https://www.instagram.com/rakaaleandra?igsh=aXFodWp4OXN2MG81&utm_source=qr" target="_blank" ><img src={Instagram} alt="" className='size-11 p-2 hover:bg-main rounded-lg' /></a>
                            <a href="https://www.facebook.com/raka.aleandra" target="_blank" ><img src={Facebook} alt="" className='size-11 p-2 hover:bg-main rounded-lg' /></a>
                            <a href="https://www.youtube.com/@rakaaleandra7164" target="_blank" ><img src={Youtube} alt="" className='size-11 p-2 hover:bg-main rounded-lg' /></a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <h1 className='text-xl font-bold text-gray-400 mb-2'>Pages</h1>
                        <Link href={route('home')} className='text-white font-semibold hover:bg-main rounded-lg p-2'>Now Showing</Link>
                        <Link href={route('index2')} className='text-white font-semibold hover:bg-main rounded-lg p-2'>Coming Soon</Link>
                        <Link href={route('theater')} className='text-white font-semibold hover:bg-main rounded-lg p-2'>Theater</Link>
                    </div>
                </div>
            </footer>
        </main>
    )
}