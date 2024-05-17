const people = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Michael Davis',
        role: 'Sales and Marketing Manager',
        imageUrl:
            'https://images.generated.photos/BWJNdSdckbKg6bMs6KwdfMdLq0pFTz29lAmF5K3lkAo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzc2MzQwLmpwZw.jpg',
    },
    {
        name: 'Sophia Brown',
        role: 'Sales and Marketing Manager',
        imageUrl:
            'https://images.generated.photos/YcwmtV974qiNKZDS7vOOLpw1mcv9pfWqJt_32l8CMQQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTk3MzYzLmpwZw.jpg',
    },
    {
        name: 'David Miller',
        role: 'Customer Service Representative',
        imageUrl:
            'https://images.generated.photos/tMH5s_PCzpm9xgIZ33j21rOvaAsrDz9yyOBkPVpvJZc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTkzNTExLmpwZw.jpg',
    },
    {
        name: 'Olivia Wilson',
        role: 'Graphic Designer',
        imageUrl:
            'https://images.generated.photos/nBgUAnPYSiitaQcHo02lL90BEI4xI2xapKYUyNqLO9E/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzAxMTg2LmpwZw.jpg',
    },
    {
        name: 'John Smith',
        role: 'Photographer',
        imageUrl:
            'https://images.generated.photos/LSdb0J5S6elSEkEStnkDIJ7sWwplD5TAnSimBpKwoqw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE1NDYxLmpwZw.jpg',
    },
    {
        name: 'Emily Johnson',
        role: 'Photographer',
        imageUrl:
            'https://images.generated.photos/nuhlabnLECjXF2TPOajjG5RDv_CdDmIyTQvVuWzoAPY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY0NTA5LmpwZw.jpg',
    },

    {
        name: 'Matthew Lee',
        role: 'Photographer',
        imageUrl:
            'https://images.generated.photos/QAYV6FoonNATE28dQ729yBO8tACBjrQvsb82KxLomV4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzgwNzA2LmpwZw.jpg',
    },
    {
        name: 'Emma Harris',
        role: 'Photographer',
        imageUrl:
            'https://images.generated.photos/1rE87_IX3IinfeJcUrbcvxkJ6e9hsqUSr3Zc6EfICgk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDI1ODgyLmpwZw.jpg',
    },
    {
        name: 'Daniel Taylor',
        role: 'Photographer',
        imageUrl:
            'https://images.generated.photos/R5tz8tNrVuTRKdWRGRTpiKj1aQOzI66VWvaF6gyvYTM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ5Njg3LmpwZw.jpg',
    },


]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">

                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600" style={{ textAlign: "justify" }}>
                        Discover the talented and passionate individuals who bring your moments to life at <strong>Lensify</strong>. Get to know our experts and their dedication to capturing your cherished memories with skill and artistry.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
