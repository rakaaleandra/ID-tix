import AppLayout from '@/layouts/app/main-layout';

export default function Theater(){
    return(
        <>
        <AppLayout />
        <div className='p-8 dark:bg-main flex justify-center w-full'>
            <div className='w-7xl flex flex-col gap-8'>
                <div className='flex justify-between font-semibold'>
                    <h1>Solo Paragon</h1>
                    <h1>081383663520</h1>
                </div>
                <div className='flex justify-between font-semibold'>
                    <h1>Solo Paragon</h1>
                    <h1>081383663520</h1>
                </div>
                <div className='flex justify-between font-semibold'>
                    <h1>Solo Paragon</h1>
                    <h1>081383663520</h1>
                </div>
                <div className='flex justify-between font-semibold'>
                    <h1>Solo Paragon</h1>
                    <h1>081383663520</h1>
                </div>
            </div>
        </div>
        </>
    )
}