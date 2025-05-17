import AppLayout from '@/layouts/app/main-layout';

export default function Jadwal({film}:any){
    // const groupedSchedules = film.schedules.reduce((groups: any, schedule: any) => {
    //     const theaterName = schedule.theater?.name || `Theater ${schedule.theater_id}`;
    //     if (!groups[theaterName]) {
    //       groups[theaterName] = [];
    //     }
    //     groups[theaterName].push(schedule);
    //     return groups;
    // }, {});

    return(
        <AppLayout >
            {film.schedules.map((schedule: any) => (
    
                <div key={schedule.id}>
                    <h1>{schedule.jam_tayang}</h1>
                </div>
            ))}
        </AppLayout>
    )
}