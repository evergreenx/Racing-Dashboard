
import Start from '../image/start.svg'
import Drive from '../image/drive.svg'
import Maintinance from '../image/mainteance.svg'
import Battery from '../image/battery.svg'
import Tires from '../image/tires.svg'
import Lock from '../image/lock.svg'





export default function Header() {





    let data = [
        { name: 'Start', icon: Start },
        { name: 'Drive', icon: Drive },
        { name: 'Maintinance', icon: Maintinance },
        { name: 'Battery', icon: Battery },
        { name: 'Tires', icon: Tires },
        { name: 'Lock', icon: Lock },





    ]
    return (
        <div className='flex justify-around mb-20 w-full '>


            {

                data.map((item, index) => {
                    return (
                        <div className=" hover:shadow-[#3629B7]  w-28 h-28 rounded-xl shadow-2xl flex flex-col  space-y-6  items-center justify-center " key={index}>
                            <div> <img src={item.icon} className="w-7 h-7" alt="logo" /> </div>
                            <p className=" text-sm text-[#BCBDC2] font-bold">{item.name}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}
