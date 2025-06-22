<?php

namespace Database\Seeders;

use App\Models\Film;
use App\Models\Theater;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Support\Str;

class FilmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // Film::factory(5)->create();
        $films = [
            [
                'nama_film' => 'Lilo & Stitch',
                'slug' => 'Lilo & Stitch',
                'poster_film' => 'LiloStitch.jpg',
                'trailer_film' => 'https://www.youtube.com/embed/VWqJifMMgZE?si=XzbudJcQ2ILcLDyZ',
                'durasi_film' => 108,
                'sutradara_film' => 'Dean Fleischer Camp',
                'genre_film' => 'Adventure, Fantasy',
                'produser' => 'Dan Lin, Jonathan Eirich',
                'produksi' => 'Walt Disney Pictures',
                'casts' => 'Maia Kealoha, Billy Magnussen, Hannah Waddingham, Tia Carrere, Zach Galifianakis, Courtney B Vance, Chris Sanders, Sydney Agudong, Amy Hill',
                'sinopsis' => 'Lilo (Maia Kealoha) a lonely little boy from Hawaii meets Stitch (Chris Sanders), an alien who fled from his home planet. The two are now friends and trying to improve the condition of the divided family',
                'tayang' => true,
            ],
            [
                'nama_film' => 'Karate Kid: Legends',
                'slug' => 'Karate Kid',
                'poster_film' => 'KarateKid.jpg',
                'trailer_film' => 'https://www.youtube.com/embed/LhRXf-yEQqA?si=eLYAXIjWrmSn5VrE',
                'durasi_film' => 94,
                'sutradara_film' => 'Jonathan Entwistle',
                'genre_film' => 'Action',
                'produser' => 'Karen Rosenfelt',
                'produksi' => 'Columbia Pictures',
                'casts' => 'Jackie Chan, Ralph Macchio, Ben Wang, Joshua Jackson, Sadie Stanley, Wen Ming-Na, Shaunette Renee Wilson, Aramis Knight, Wyatt Oleff, Jennifer-Lynn Christie',
                'sinopsis' => 'After moving to New York with his mother, Li Fong (Ben Wang) struggles to forget the past as he tries to fit in with his new classmates. When a friend needs his help, Li joins a karate competition -- but his skills alone are not enough. With the help of Mr. Han (Jackie Chan) and Daniel LaRusso (Ralph Macchio), he soon learned to combine two styles into one for the ultimate martial arts fight',
                'tayang' => true,
            ],
            [
                'nama_film' => 'Final Destination Bloodlines',
                'slug' => 'Final Destination',
                'poster_film' => 'FinalDestination.jpg',
                'trailer_film' => 'https://www.youtube.com/embed/UWMzKXsY9A4?si=T88OvRUdPnDjDefq',
                'durasi_film' => 110,
                'sutradara_film' => 'Adam Stein and Zach Lipovsky',
                'genre_film' => 'Horror Thriller',
                'produser' => 'Craig Perry, Sheila Hanahan Taylor, Jon Watts, Dianne McGunigle, Toby Emmerich',
                'produksi' => 'Warner Bros. Pictures',
                'casts' => 'Kaitlyn Santa Juana, Teo Briones, Richard Harmon, Owen Patrick Joyner, Rya Kihlstedt, Anna Lore, Brec Bassinger, Tony Todd',
                'sinopsis' => 'The latest gripping story from the successful and bloody New Line Cinema franchise brings the audience back to the roots of the terrible justice of the Death. Terrorized by a terrible recurring nightmare, a college student named Stefanie (Kaitlyn Santa Juana) returns to her hometown to find the only person who may be able to break this curse and save her family from an inevitable fate of tragic death',
                'tayang' => true,
            ],
            [
                'nama_film' => 'Thunderbolts',
                'slug' => 'Thunderbolts',
                'poster_film' => 'Thunderbolts.jpg',
                'trailer_film' => 'https://www.youtube.com/embed/-sAOWhvheK8?si=akJYTitcJDN6l_8L',
                'durasi_film' => 127,
                'sutradara_film' => 'Jake Schreier',
                'genre_film' => 'Superhero, Action',
                'produser' => 'Kevin Feige',
                'produksi' => 'Walt Disney Pictures',
                'casts' => 'Florence Pugh, Sebastian Stan, Olga Kurylenko, David Harbour, Lewis Pullman, Hannah John-kamen, Wyatt Russell, Geraldine Viswanathan, Julia Louis-dreyfus, Chris Bauer, Joshua Mikel',
                'sinopsis' => 'Marvel Studios assembles an unconventional team of antiheroes — Yelena Belova, Bucky Barnes, Red Guardian, Ghost, Taskmaster and John Walker. After finding themselves ensnared in a death trap set by Valentina Allegra de Fontaine, these disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts. Will this dysfunctional group tear themselves apart, or find redemption and unite as something much more before its too late?',
                'tayang' => true,
            ],
            [
                'nama_film' => 'Sinners',
                'slug' => 'Sinners',
                'poster_film' => 'Sinners.jpg',
                'trailer_film' => 'https://www.youtube.com/embed/bKGxHflevuk?si=FQ-4_4L4yW_2lWdX',
                'durasi_film' => 137,
                'sutradara_film' => 'Ryan Coogler',
                'genre_film' => 'Thriller, Horror',
                'produser' => 'Ryan Coogler, Zinzi Coogler, and Sev Ohanian',
                'produksi' => 'Warner Bros. Pictures',
                'casts' => 'Michael B. Jordan, Hailee Steinfeld, Miles Caton, Jack Oconnell, Wunmi Mosaku, Jayme Lawson, Omar Miller, Delroy Lindo',
                'sinopsis' => 'Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back',
                'tayang' => true,
            ],
            [
                'nama_film' => 'F1 The Movie',
                'slug' => 'F1',
                'poster_film' => 'F1.jpg',
                'trailer_film' => 'https://www.youtube.com/embed/8yh9BPUBbbQ?si=TPBD8M409cyxHEOl',
                'durasi_film' => 155,
                'sutradara_film' => 'Joseph Kosinski',
                'genre_film' => 'Sport, Drama, Action',
                'produser' => 'Jerry Bruckheimer, Brad Pitt, Lewis Hamilton',
                'produksi' => 'Warner Bros. Pictures',
                'casts' => 'Brad Pitt, Damson Idris, Kerry Condon, Tobias Menzies, Kim Bodnia, Javier Bardem',
                'sinopsis' => 'It was called "a very stearing stent," Sonny Hayes (Brad Pitt) is the FORMULA 1 phenomenon who is the stenant in the 1990s until the first time to the world of the sto ske his life. The two of them is now, he is a nomadic sare, even though he is being seen by his man of his sekan, Ruben Cervantes (Javier Bardem), a FORMULA 1 team who is on the back and on the hand. Ruben sets Sonny to go to FORMULA 1 for one of the most important tens to the world to get the time and make the most important world. He will get a little stet with Joshua Pearce (Damson Idris), a rookie who was in the mant to get his back. But, when the morning came, then Sonny had to get him, and he said that in FORMULA 1, youre going to be a great time—and the story is just like it cant be done by the same time',
                'tayang' => false,
            ],
            [
                'nama_film' => 'Ballerina',
                'slug' => 'Ballerina',
                'poster_film' => 'Ballerina.jpg',
                'trailer_film' => 'https://www.youtube.com/embed/0FSwsrFpkbw?si=QRYWRVMMgd5bDA69',
                'durasi_film' => 124,
                'sutradara_film' => 'Len Wiseman',
                'genre_film' => 'Action, Thriller',
                'produser' => 'Basil Iwanyk, Erica Lee, Chad Stahelski',
                'produksi' => 'Lionsgate',
                'casts' => 'Ana de Armas, Keanu Reeves, Ian McShane',
                'sinopsis' => 'Eve (Ana de Armas) a trained assassin in the tradition of the Roman Ruska organization set out for revenge after her fathers death.',
                'tayang' => false,
            ],
            [
                'nama_film' => 'Mission: Impossible - The Final Reckoning',
                'slug' => 'Mission The Final Reckoning',
                'poster_film' => 'MissionTheFinalReckoning.jpg',
                'trailer_film' => 'https://www.youtube.com/embed/fsQgc9pCyDU?si=wbMQ0zVnVx9YDDVO',
                'durasi_film' => 169,
                'sutradara_film' => 'Christopher McQuarrie',
                'genre_film' => 'Action, Thriller',
                'produser' => 'Tom Cruise, Christopher McQuarrie',
                'produksi' => 'Paramount Pictures',
                'casts' => 'Tom Cruise, Hayley Atwell, Ving Rhames',
                'sinopsis' => 'Continuing the story from the previous film, Mission: Impossible - Dead Reckoning Part One. Ethan Hunt (Tom Cruise) will return to continue the mission to destroy old enemies and new enemies that are more dangerous.',
                'tayang' => false,
            ],
            [
                'nama_film'      => 'How to Train Your Dragon',
                'slug' => 'How to Train Your Dragon',
                'poster_film'    => 'HOW TO TRAIN YOUR DRAGON.jpeg',
                'trailer_film'   => 'https://www.youtube.com/embed/22w7z_lT6YM?si=Xfrvr2IgQ0IWmOj6',
                'durasi_film'    => 125,
                'sutradara_film' => 'Dean DeBlois',
                'genre_film'     => 'Aksi-Petualangan, Fantasi',
                'produser'       => 'Marc Platt, Dean DeBlois, Adam Siegel',
                'produksi'       => 'DreamWorks Animation, Marc Platt Productions',
                'casts'          => 'Mason Thames, Gerard Butler, Nico Parker, Nick Frost, Julian Dennison, Gabriel Howell, Bronwyn James, Harry Trevaldwyn, Ruth Codd',
                'sinopsis'       => 'Di sebuah pulau terpencil bernama Berk, bangsa Viking dan naga telah menjadi musuh bebuyutan selama beberapa generasi. Seorang pemuda Viking yang canggung dan sering diabaikan bernama Hiccup, menentang tradisi sukunya ketika ia berteman dengan seekor naga Night Fury yang ditakuti, yang ia beri nama Toothless. Persahabatan mereka menjadi kunci untuk mengubah masa depan dan menyatukan kembali dunia Viking dan naga.',
                'tayang'         => false,
            ],
            [
                'nama_film'      => 'Superman',
                'slug' => 'Superman',
                'poster_film'    => 'DC Comics Superman (2025).jpeg',
                'trailer_film'   => 'https://www.youtube.com/embed/Ox8ZLF6cGM0?si=5dqQSJU8hfteVY7b',
                'durasi_film'    => 129,
                'sutradara_film' => 'James Gunn',
                'genre_film'     => 'Superhero, Aksi, Fiksi Ilmiah',
                'produser'       => 'Peter Safran, James Gunn',
                'produksi'       => 'DC Studios, The Safran Company',
                'casts'          => 'David Corenswet, Rachel Brosnahan, Nicholas Hoult, Edi Gathegi, Anthony Carrigan, Nathan Fillion, Isabela Merced',
                'sinopsis'       => 'Film ini mengisahkan perjalanan Superman (Clark Kent) untuk mendamaikan warisan aliennya dengan keluarga angkatnya di bumi. Ia adalah perwujudan kebenaran, keadilan, dan cara Amerika, yang membawa kebaikan di dunia yang menganggap kebaikan sebagai sesuatu yang kuno.',
                'tayang'         => false,
            ],
            [
                'nama_film'      => 'Jurassic World: Rebirth',
                'slug' => 'Jurassic World',
                'poster_film'    => 'Jurassic World 4 Rebirth.jpeg',
                'trailer_film'   => 'https://www.youtube.com/embed/jan5CFWs9ic?si=dNVytT_3qt1b2cK9',
                'durasi_film'    => 133,
                'sutradara_film' => 'Gareth Edwards',
                'genre_film'     => 'Aksi, Fiksi Ilmiah, Petualangan',
                'produser'       => 'Frank Marshall, Patrick Crowley',
                'produksi'       => 'Amblin Entertainment, The Kennedy/Marshall Company',
                'casts'          => 'Scarlett Johansson, Mahershala Ali, Jonathan Bailey, Rupert Friend, Manuel Garcia-Rulfo, Luna Blaise',
                'sinopsis'       => 'Bertahun-tahun setelah peristiwa Jurassic World Dominion, sebuah tim baru dikirim ke pulau terpencil yang dulunya merupakan fasilitas penelitian Jurassic Park. Misi mereka adalah untuk mengekstrak materi genetik dari dinosaurus yang tersisa. Namun, mereka segera menemukan bahwa pulau itu menyembunyikan rahasia yang lebih berbahaya daripada yang pernah mereka bayangkan, saat mereka berhadapan dengan spesies dinosaurus baru yang mengerikan.',
                'tayang'         => false,
            ],
            [
                'nama_film'      => 'Tron: Ares',
                'slug' => 'Tron Ares',
                'poster_film'    => 'Tron Ares.jpeg',
                'trailer_film'   => 'https://www.youtube.com/embed/9KVG_X_7Naw?si=sqdPxkGcjGYBdpqh',
                'durasi_film'    => 120,
                'sutradara_film' => 'Joachim Rønning',
                'genre_film'     => 'Aksi, Fiksi Ilmiah',
                'produser'       => 'Sean Bailey, Jeffrey Silver, Justin Springer, Jared Leto, Emma Ludbrook',
                'produksi'       => 'Walt Disney Pictures',
                'casts'          => 'Jared Leto, Evan Peters, Greta Lee, Jodie Turner-Smith, Cameron Monaghan, Sarah Desjardins, Gillian Anderson, Jeff Bridges',
                'sinopsis'       => 'Ares, sebuah program komputer yang sangat canggih, dikirim dari dunia digital ke dunia nyata dalam sebuah misi berbahaya. Ini menandai pertemuan pertama umat manusia dengan makhluk Kecerdasan Buatan (AI).',
                'tayang'         => false,
            ],
            [
                'nama_film'      => 'The Conjuring: Last Rites',
                'slug' => 'The Conjuring',
                'poster_film'    => 'The Conjuring Last Rites.jpeg',
                'trailer_film'   => 'https://www.youtube.com/embed/FSAz556s0fM?si=QEoli859w_ctsSs3',
                'durasi_film'    => 120,
                'sutradara_film' => 'Michael Chaves',
                'genre_film'     => 'Horor, Misteri, Thriller',
                'produser'       => 'James Wan, Peter Safran',
                'produksi'       => 'New Line Cinema, Atomic Monster, The Safran Company',
                'casts'          => 'Patrick Wilson, Vera Farmiga, Mia Tomlinson, Ben Hardy',
                'sinopsis'       => 'Ed dan Lorraine Warren kembali untuk menangani kasus supernatural yang mengerikan, yang akan menjadi salah satu investigasi paling menakutkan dan terakhir dalam karir mereka.',
                'tayang'         => false,
            ],
            [
                'nama_film'      => 'M3GAN 2.0',
                'slug' => 'M3GAN 2.0',
                'poster_film'    => 'M3GAN 2_0 (2025).jpeg',
                'trailer_film'   => 'https://www.youtube.com/embed/1FeiTZMtwLA?si=hAWXYvoE4ruyjeyG',
                'durasi_film'    => 119,
                'sutradara_film' => 'Gerard Johnstone',
                'genre_film'     => 'Horor, Fiksi Ilmiah, Thriller',
                'produser'       => 'Jason Blum, James Wan',
                'produksi'       => 'Blumhouse Productions',
                'casts'          => 'Allison Williams, Violet McGraw',
                'sinopsis'       => 'Dua tahun setelah amukan M3GAN, penciptanya, Gemma, terpaksa membangkitkan kembali ciptaannya yang terkenal jahat itu untuk mengalahkan Amelia, sebuah senjata tingkat militer yang dibuat oleh kontraktor pertahanan yang telah mencuri teknologi dasar M3GAN.',
                'tayang'         => false,
            ],
            [
                'nama_film'      => 'Dandadan: Evil Eye',
                'slug' => 'Dandadan',
                'poster_film'    => 'Dandadan Evil Eye.webp',
                'trailer_film'   => 'https://www.youtube.com/embed/91zk0WAkxpY?si=x2hxZ9OzXH0GW2Za',
                'durasi_film'    => 93,
                'sutradara_film' => 'Fūga Yamashiro (sutradara serial anime)',
                'genre_film'     => 'Aksi, Komedi Romantis, Supernatural, Fiksi Ilmiah',
                'produser'       => 'TBA',
                'produksi'       => 'Science SARU',
                'casts'          => '(Pengisi Suara) Natsuki Hanae, Shion Wakayama, Kaito Ishikawa',
                'sinopsis'       => 'Film ini merupakan bagian dari serial Dandadan. Kisahnya berpusat pada Momo Ayase, seorang gadis SMA yang percaya pada hantu, dan temannya, Okarun, yang terobsesi dengan alien. Setelah bertaruh untuk membuktikan keberadaan hantu dan alien, mereka menemukan diri mereka terjebak dalam serangkaian insiden supernatural yang aneh dan berbahaya. Mereka harus menggunakan kekuatan baru mereka untuk melawan berbagai entitas gaib.',
                'tayang'         => false,
            ],
            [
                'nama_film'      => 'Now You See Me 3',
                'slug' => 'Now You See Me 3',
                'poster_film'    => 'NowYouSeeMeNowYouDont.jpeg',
                'trailer_film'   => 'https://www.youtube.com/embed/-E3lMRx7HRQ?si=FEto004YQ-8dktmf',
                'durasi_film'    => 120,
                'sutradara_film' => 'Ruben Fleischer',
                'genre_film'     => 'Thriller, Aksi, Kriminal',
                'produser'       => 'Bobby Cohen, Alex Kurtzman',
                'produksi'       => 'Summit Entertainment, Secret Hideout',
                'casts'          => 'Jesse Eisenberg, Mark Ruffalo, Woody Harrelson, Dave Franco, Isla Fisher, Morgan Freeman, Ariana Greenblatt, Justice Smith, Dominic Sessa',
                'sinopsis'       => 'Para ilusionis terhebat dunia, The Four Horsemen, kembali beraksi di panggung global dalam Now You See Me: Now You Dont. Kali ini, mereka menghadapi tantangan terbesar mereka saat harus mencuri "Heart Diamond", sebuah permata tak ternilai milik seorang miliarder korup dan berbahaya, Veronika Vanderberg (Rosamund Pike).',
                'tayang'         => false,
            ],
            // [
            //     'nama_film' => 'Inception',
            //     'slug' => 'inception',
            //     'poster_film' => 'Inception.jpg',
            //     'durasi_film' => 148,
            //     'sutradara_film' => 'Christopher Nolan',
            //     'genre_film' => 'Sci-Fi',
            //     'produser' => 'Warner Bros',
            //     'produksi' => 'Syncopy',
            //     'casts' => 'Leonardo DiCaprio, Joseph Gordon-Levitt',
            //     'sinopsis' => 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.',
            //     'tayang' => true,
            // ],
            // [
            //     'nama_film' => 'The Matrix',
            //     'slug' => 'The-Matrix',
            //     'poster_film' => 'TheMatrix.jpg',
            //     'durasi_film' => 136,
            //     'sutradara_film' => 'Lana Wachowski & Lilly Wachowski',
            //     'genre_film' => 'Action, Sci-Fi',
            //     'produser' => 'Warner Bros.',
            //     'produksi' => 'Village Roadshow Pictures',
            //     'casts' => 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
            //     'sinopsis' => 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
            //     'tayang' => true,
            // ],
            // [
            //     'nama_film' => 'Parasite',
            //     'slug' => 'Parasite',
            //     'poster_film' => 'Parasite.jpg',
            //     'durasi_film' => 132,
            //     'sutradara_film' => 'Bong Joon-ho',
            //     'genre_film' => 'Thriller, Drama',
            //     'produser' => 'CJ Entertainment',
            //     'produksi' => 'Barunson E&A',
            //     'casts' => 'Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong',
            //     'sinopsis' => 'A poor family schemes to become employed by a wealthy family by infiltrating their household one by one.',
            //     'tayang' => true,
            // ],
            // [
            //     'nama_film' => 'Spirited Away',
            //     'slug' => 'Spirited-Away',
            //     'poster_film' => 'SpiritedAway.jpg',
            //     'durasi_film' => 125,
            //     'sutradara_film' => 'Hayao Miyazaki',
            //     'genre_film' => 'Animation, Fantasy',
            //     'produser' => 'Toho',
            //     'produksi' => 'Studio Ghibli',
            //     'casts' => 'Rumi Hiiragi, Miyu Irino, Mari Natsuki',
            //     'sinopsis' => 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, spirits, and witches.',
            //     'tayang' => true,
            // ],
            // [
            //     'nama_film' => 'The Godfather',
            //     'slug' => 'The-Godfather',
            //     'poster_film' => 'TheGodfather.jpg',
            //     'durasi_film' => 175,
            //     'sutradara_film' => 'Francis Ford Coppola',
            //     'genre_film' => 'Crime, Drama',
            //     'produser' => 'Paramount Pictures',
            //     'produksi' => 'Alfran Productions',
            //     'casts' => 'Marlon Brando, Al Pacino, James Caan',
            //     'sinopsis' => 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
            //     'tayang' => true,
            // ],
            // [
            //     'nama_film' => 'Bad Genius',
            //     'slug' => 'Bad-Genius',
            //     'poster_film' => 'BadGenius.jpg',
            //     'durasi_film' => 96,
            //     'sutradara_film' => 'J.C. Lee',
            //     'genre_film' => 'Crime, Drama',
            //     'produser' => 'Patrick Wachsberger, Erik Feig, Jessica Switch, Ashley Stern',
            //     'produksi' => 'Vertical Entertainment',
            //     'casts' => 'Callina Liang, Benedict Wong, Jabari Banks',
            //     'sinopsis' => 'A group of senior high school students, trying to remove the cheating system of new student admissions at a famous university.',
            //     'tayang' => false,
            // ],
            // [
            //     'nama_film' => 'Ballerina',
            //     'slug' => 'Ballerina',
            //     'poster_film' => 'Ballerina.jpg',
            //     'durasi_film' => 124,
            //     'sutradara_film' => 'Len Wiseman',
            //     'genre_film' => 'Action, Thriller',
            //     'produser' => 'Basil Iwanyk, Erica Lee, Chad Stahelski',
            //     'produksi' => 'Lionsgate',
            //     'casts' => 'Ana de Armas, Keanu Reeves, Ian McShane',
            //     'sinopsis' => 'Eve (Ana de Armas) a trained assassin in the tradition of the Roman Ruska organization set out for revenge after her fathers death.',
            //     'tayang' => false,
            // ],
            // [
            //     'nama_film' => 'How To Train Your Dragon',
            //     'slug' => 'How-To-Train-Your-Dragon',
            //     'poster_film' => 'HowToTrainYourDragon.jpg',
            //     'durasi_film' => 125,
            //     'sutradara_film' => 'Dean DeBlois',
            //     'genre_film' => 'Fantasy',
            //     'produser' => 'Dean DeBlois, Marc Platt, Adam Siegel',
            //     'produksi' => 'Universal Pictures',
            //     'casts' => 'Nico Parker, Gerard Butler',
            //     'sinopsis' => 'When an ancient threat threatens the Vikings on the island of Berk, the friendship between Hiccup (Mason Thames), an innovative Viking, and Toothless, a Night Fury dragon, becomes the key for both species to make a new future together.',
            //     'tayang' => false,
            // ],
            // [
            //     'nama_film' => 'Mission: Impossible - The Final Reckoning',
            //     'slug' => 'Mission-The-Final-Reckoning',
            //     'poster_film' => 'MissionTheFinalReckoning.jpg',
            //     'durasi_film' => 169,
            //     'sutradara_film' => 'Christopher McQuarrie',
            //     'genre_film' => 'Action, Thriller',
            //     'produser' => 'Tom Cruise, Christopher McQuarrie',
            //     'produksi' => 'Paramount Pictures',
            //     'casts' => 'Tom Cruise, Hayley Atwell, Ving Rhames',
            //     'sinopsis' => 'Continuing the story from the previous film, Mission: Impossible - Dead Reckoning Part One. Ethan Hunt (Tom Cruise) will return to continue the mission to destroy old enemies and new enemies that are more dangerous.',
            //     'tayang' => false,
            // ],
            // [
            //     'nama_film' => 'Locked',
            //     'slug' => 'Locked',
            //     'poster_film' => 'Locked.jpg',
            //     'durasi_film' => 95,
            //     'sutradara_film' => 'David Yarovesky.',
            //     'genre_film' => 'Thriller, Suspense',
            //     'produser' => 'Sam Raimi and Zainab Azizi',
            //     'produksi' => 'The Avenue Entertainment',
            //     'casts' => 'Bill Skersgard, Anthony Hopkins, Gabriella Waish',
            //     'sinopsis' => 'Eddie Barrish (Bill Skarsgard) is a thief who tries to break into a luxury SUV. What he doesnt know is that he has fallen into a dangerous psychological game made by William (Anthony Hopkins) the owner of the car.',
            //     'tayang' => false,
            // ],
        ];

        foreach ($films as $film) {
            Film::create($film);
        }

        $skejuls = [
            [
                'nama_bioskop' => 'Grand XXI Solo',
                'lokasi_bioskop' => 'Solo',
                'gambar_bioskop' => 'GrandXXI.jpeg',
                'spesifik_lokasi_bioskop' => 'Solo Grand Mall, Jl. Slamet Riyadi No.295 Lantai 4, Penumping, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57141',
                'map_bioskop' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0816717362427!2d110.80503977539351!3d-7.566074692447959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a142a7ef544f5%3A0xefcd715ef9a6b868!2sGRAND%20XXI!5e0!3m2!1sms!2sid!4v1749650332705!5m2!1sms!2sid',
                'deskripsi_bioskop' => 'Grand XXI Solo adalah bioskop multiplex modern milik Cinema 21 yang menawarkan 4 auditorium berkualitas, dengan layar 2D reguler dan sistem audio standar. Terletak strategis di jantung kota Solo, berada di dalam Solo Grand Mall, sehingga sangat mudah dijangkau.',
                'no_telp_bioskop' => '(0271) 733721',
            ],
            [
                'nama_bioskop' => 'Solo Paragon XXI',
                'lokasi_bioskop' => 'Solo',
                'gambar_bioskop' => 'SoloParagon.jpeg',
                'spesifik_lokasi_bioskop' => 'Solo Paragon, Mall, Jl. Yosodipuro No.133, Mangkubumen, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57130',
                'map_bioskop' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.115510389637!2d110.80670057539344!3d-7.562383192451556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1682376047af%3A0x653d82c3db134b39!2sSolo%20Paragon%20XXI!5e0!3m2!1sms!2sid!4v1749651400318!5m2!1sms!2sid',
                'deskripsi_bioskop' => 'Solo Paragon XXI adalah bioskop Cinema XXI dengan 5 studio reguler dan 1 studio The Premiere Naratama (kapasitas 978 kursi), menjadikannya cabang pertama di Jawa Tengah yang menghadirkan fasilitas premium: reclining seat, layanan makan di tempat, dan audio-visual berkualitas tinggi.',
                'no_telp_bioskop' => '(0271) 7881921',
            ],
            [
                'nama_bioskop' => 'Solo Square XXI',
                'lokasi_bioskop' => 'Solo',
                'gambar_bioskop' => 'SoloSquare.webp',
                'spesifik_lokasi_bioskop' => 'Slamet Riyadi St No.451-455, Pajang, Laweyan, Surakarta City, Central Java 57146',
                'map_bioskop' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.127949975269!2d110.78607887539337!3d-7.561025692452854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a143495555555%3A0x5217a34947ddb769!2sXXI%20Solo%20Square!5e0!3m2!1sms!2sid!4v1749651527630!5m2!1sms!2sid',
                'deskripsi_bioskop' => 'Solo Square XXI adalah bioskop Cinema XXI di Solo Square Mall, menawarkan 5 auditorium deluxe dengan audio visual berkualitas dan layanan pemesanan tiket online',
                'no_telp_bioskop' => '(0271) 7654221',
            ],
            [
                'nama_bioskop' => 'The Park XXI',
                'lokasi_bioskop' => 'Solo',
                'gambar_bioskop' => 'ThePark.jpeg',
                'spesifik_lokasi_bioskop' => 'Jl. Ir. Soekarno, Dusun II, Madegondo, Kec. Grogol, Kabupaten Sukoharjo, Jawa Tengah 57552',
                'map_bioskop' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.78153357198!2d110.81428137539389!3d-7.598739092416149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a160f858e359b%3A0xf0c473009d0b7c95!2sThe%20Park%20XXI!5e0!3m2!1sms!2sid!4v1749652427762!5m2!1sms!2sid',
                'deskripsi_bioskop' => 'The Park XXI adalah cabang Cinema XXI di The Park Mall, menempati lantai 2 mal yang asri dan modern. Menyediakan studio reguler serta kelas Premiere, dengan pengalaman menonton yang nyaman—layar jernih, audio bersih.',
                'no_telp_bioskop' => '(0271) 7891321',
            ],
            [
                'nama_bioskop' => 'Transmart Solo CGV',
                'lokasi_bioskop' => 'Solo',
                'gambar_bioskop' => 'Transmart.png',
                'spesifik_lokasi_bioskop' => 'Jl. A. Yani No.234, Banaran, Pabelan, Kec. Kartasura, Kabupaten Sukoharjo, Jawa Tengah 57169',
                'map_bioskop' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1349270838573!2d110.76489797539341!3d-7.560264192453652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a145a74018913%3A0x751e7d67ec79a7f8!2sCGV%20Transmart%20Solo!5e0!3m2!1sms!2sid!4v1749652457410!5m2!1sms!2sid',
                'deskripsi_bioskop' => '',
                'no_telp_bioskop' => '(0271) 7891421',
            ]
            // [
            //     'nama_bioskop' => 'Grand XXI Solo',
            //     'lokasi_bioskop' => 'Solo'
            // ],
            // [
            //     'nama_bioskop' => 'Solo Paragon XXI',
            //     'lokasi_bioskop' => 'Solo'
            // ],
            // [
            //     'nama_bioskop' => 'Solo Square XXI',
            //     'lokasi_bioskop' => 'Solo'
            // ],
            // [
            //     'nama_bioskop' => 'The Park XXI',
            //     'lokasi_bioskop' => 'Solo'
            // ],
            // [
            //     'nama_bioskop' => 'Transmart Solo CGV',
            //     'lokasi_bioskop' => 'Solo'
            // ]
        ];

        foreach ($skejuls as $skejul) {
            Theater::create($skejul);
        }

        $Schedules = [];

        // Mulai dari 2023-05-15 selama 7 hari
        $startDate = Carbon::today();
        // $startDate = Carbon::create(2023, 5, 15);

        for ($x = 0; $x < 5; $x++) {
            $theater_id = $x + 1;

            $showtimes = [
                [1, ['12:00:00', '14:20:00', '16:40:00', '19:00:00', '21:20:00']],
                [2, ['12:10:00', '14:25:00', '16:40:00', '18:45:00', '21:00:00']],
                [3, ['12:30:00', '14:30:00', '16:30:00', '18:30:00', '20:30:00']],
                [4, ['12:35:00', '14:40:00', '16:45:00', '18:50:00', '20:55:00']],
                [5, ['14:05:00', '17:10:00', '20:15:00']],
            ];

            // Loop setiap hari selama 5 hari
            for ($day = 0; $day < 6; $day++) {
                $currentDate = $startDate->copy()->addDays($day)->format('Y-m-d');

                foreach ($showtimes as [$film_id, $times]) {
                    foreach ($times as $jam_tayang) {
                        $Schedules[] = [
                            'film_id' => $theater_id,
                            'theater_id' => $film_id,
                            'tanggal_tayang' => $currentDate,
                            'jam_tayang' => $jam_tayang,
                            'harga_tiket' => 25000,
                        ];
                    }
                }
            }
        }

        // Mass insert ke database
        Schedule::insert($Schedules);

        User::create([
            'name' => 'Raka Aleandra',
            'email' => 'r@g.com',
            'password' => '12345678',
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'isAdmin' => false
        ]);
        User::create([
            'name' => 'Raka Aleandra Admin',
            'email' => 'raka.aleandra@gmail.com',
            'password' => '12345678',
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'isAdmin' => true
        ]);
    }
}
