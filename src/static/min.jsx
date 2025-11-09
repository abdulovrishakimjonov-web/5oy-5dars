// export const LINKS = [
//   {
//     title: 'News Title 2',
//     image: 'https://picsum.photos/id/149/500/300',
//     category: 'Technology',
//     description: 'This is the description for News Title 2.',
//     date: '2023-03-22T15:59:07.338Z',
//     author: 'Emily Williams',
//     isOfficial: true
//   },
//   {
//     title: 'News Title 24',
//     image: 'https://picsum.photos/id/219/500/300',
//     category: 'Entertainment',
//     description: 'This is the description for News Title 24.',
//     date: '2023-04-28T18:57:33.699Z',
//     author: 'Robert Brown',
//     isOfficial: true
//   },
//   {
//     title: 'News Title 82',
//     image: 'https://picsum.photos/id/918/500/300',
//     category: 'Sports',
//     description: 'This is the description for News Title 82.',
//     date: '2023-04-22T04:03:54.560Z',
//     author: 'Emily Williams',
//     isOfficial: false
//   },
//   {
//     title: 'News Title 42',
//     image: 'https://picsum.photos/id/1073/500/300',
//     category: 'Health',
//     description: 'This is the description for News Title 42.',
//     date: '2023-07-14T01:15:37.707Z',
//     author: 'Emily Williams',
//     isOfficial: true
//   },
//   {
//     title: 'News Title 69',
//     image: 'https://picsum.photos/id/456/500/300',
//     category: 'Technology',
//     description: 'This is the description for News Title 69.',
//     date: '2023-01-21T23:25:33.906Z',
//     author: 'Michael Johnson',
//     isOfficial: false
//   },
//   {
//     title: 'News Title 97',
//     image: 'https://picsum.photos/id/189/500/300',
//     category: 'Entertainment',
//     description: 'This is the description for News Title 97.',
//     date: '2023-02-02T05:36:24.228Z',
//     author: 'John Doe',
//     isOfficial: false
//   },
//   {
//     title: 'News Title 80',
//     image: 'https://picsum.photos/id/157/500/300',
//     category: 'Entertainment',
//     description: 'This is the description for News Title 80.',
//     date: '2023-02-12T21:27:11.020Z',
//     author: 'Jane Smith',
//     isOfficial: true
//   },
//   {
//     title: 'News Title 11',
//     image: 'https://picsum.photos/id/132/500/300',
//     category: 'Health',
//     description: 'This is the description for News Title 11.',
//     date: '2023-04-11T06:06:17.790Z',
//     author: 'Robert Brown',
//     isOfficial: false
//   },
//   {
//     title: 'News Title 71',
//     image: 'https://picsum.photos/id/412/500/300',
//     category: 'Entertainment',
//     description: 'This is the description for News Title 71.',
//     date: '2023-02-15T12:42:38.477Z',
//     author: 'John Doe',
//     isOfficial: false
//   },
//   {
//     title: 'News Title 55',
//     image: 'https://picsum.photos/id/1025/500/300',
//     category: 'Technology',
//     description: 'This is the description for News Title 55.',
//     date: '2023-01-22T22:58:48.447Z',
//     author: 'Robert Brown',
//     isOfficial: false
//   },
//   {
//     title: 'News Title 93',
//     image: 'https://picsum.photos/id/1004/500/300',
//     category: 'Health',
//     description: 'This is the description for News Title 93.',
//     date: '2023-01-09T23:07:01.982Z',
//     author: 'Robert Brown',
//     isOfficial: false
//   },
//   {
//     title: 'News Title 42',
//     image: 'https://picsum.photos/id/962/500/300',
//     category: 'Entertainment',
//     description: 'This is the description for News Title 42.',
//     date: '2023-01-02T13:34:03.320Z',
//     author: 'Jane Smith',
//     isOfficial: false
//   },
//   {
//     title: 'News Title 44',
//     image: 'https://picsum.photos/id/100/500/300',
//     category: 'Technology',
//     description: 'This is the description for News Title 44.',
//     date: '2023-06-19T10:15:40.334Z',
//     author: 'Jane Smith',
//     isOfficial: true
//   },
//   {
//     title: 'News Title 54',
//     image: 'https://picsum.photos/id/263/500/300',
//     category: 'Sports',
//     description: 'This is the description for News Title 54.',
//     date: '2023-03-22T14:05:09.371Z',
//     author: 'Robert Brown',
//     isOfficial: false
//   },
//   {
//     title: 'News Title 46',
//     image: 'https://picsum.photos/id/931/500/300',
//     category: 'Technology',
//     description: 'This is the description for News Title 46.',
//     date: '2023-04-11T01:00:28.101Z',
//     author: 'John Doe',
//     isOfficial: true
//   }

// ]




// {
//         LINKS.map((item) => (
//           <div key={item.id} className='flex flex-col justify-center items-center border '>
//             <h1>{item.title}</h1>
//             <img src={item.image} alt="" />
//             <p>{item.category}</p>

//           </div>
//         ))
//       }

import car from "../assets/companent/img/ma.png"
import cara from '../assets/companent/img/cara.png'
import honji from '../assets/companent/img/honji.png'
import jeep from '../assets/companent/img/jeep.png'
import chevrolet from '../assets/companent/img/chevrolet.png'
import nisan from '../assets/companent/img/nisan.png'

export const LINKS = [
  {
    title: "Ford Fiesta",
    image:car,
    seats:  "5 Seats",
    transmission: "Automatic",
    fuel: "1-lit / 2.5 km",
    ageRequirement: "21+ Years",
    isAvailable: true,
  },
  {
    title: "Nissan Versa",
    image:cara,
    category: "Compact Car",
    seats: "5 Seats",
    transmission: "Automatic",
    fuel: "1-lit / 2.5 km",
    ageRequirement: "21+ Years",
    isAvailable: true,
  },
  {
    title: "Toyota Corolla",
    image:honji,
    category: "Mid-size Car",
    seats: "5 Seats",
    transmission: "Automatic",
    fuel: "1-lit / 2.5 km",
    ageRequirement: "21+ Years",
    isAvailable: true,
  },
  {
    title: "Nissan Rogue",
    image:jeep,
    category: "Mid-size SUV",
    seats: "5 Seats",
    transmission: "Automatic",
    fuel: "1-lit / 2.5 km",
    ageRequirement: "21+ Years",
    isAvailable: true,
  },
  {
    title: "Chevy Traverse",
    image:chevrolet,
    category: "Full-size SUV",
    seats: "5 Seats",
    transmission: "Automatic",
    fuel: "1-lit / 2.5 km",
    ageRequirement: "21+ Years",
    isAvailable: true,
  },
  {
    title: "Nissan Altima",
    image:nisan,
    category: "Full-size Car",
    seats: "5 Seats",
    transmission: "Automatic",
    fuel: "1-lit / 2.5 km",
    ageRequirement: "21+ Years",
    isAvailable: true,
  },
];

export const FEATURES = [
  {
    id: 1,
    title: "Book online, pay online",
    description: "Complete the booking process A–Z, with our easy online system",
    icon: "https://cdn-icons-png.flaticon.com/512/104/104662.png" // Kompyuter icon
  },
  {
    id: 2,
    title: "Guaranteed car reservation",
    description: "When you book with Car rental, you can be confident your car will be waiting for you",
    icon: "https://cdn-icons-png.flaticon.com/512/565/565547.png" // Shield icon
  },
  {
    id: 3,
    title: "Unparalleled customer service",
    description: "We're here to help. We pride ourselves in our customer service",
    icon: "https://cdn-icons-png.flaticon.com/512/747/747376.png" // User support icon
  },
  {
    id: 4,
    title: "No reservation or booking fees",
    description: "No cancellation fees if cancelled 24 hours prior to booking time",
    icon: "https://cdn-icons-png.flaticon.com/512/711/711239.png" // Wallet icon
  }
];
