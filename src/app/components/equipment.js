import React from 'react'
import EquipmentCard from '../ui/quipment'

const Equipment = () => {
    const equipments = [
        {
            image: "/oxygen.png",
            title: "Oxygen Cylinderson rent",
            button: "Rent Now"
        },
        {
            image: "/holter.png",
            title: "Holter Machines on rent/sale",
            button: "Book Now"
        },
        {
            image: "/mask.png",
            title: "3M N95 Maskson sale",
            button: "Book Now"
        },
        {
            image: "/bed.png",
            title: "Dedicated HospitasBeds on sale",
            button: "Book Now"
        },
        {
            image: "/bibap.png",
            title: "BiBap Machineson rent",
            button: "Book Now"
        },
        {
            image: "/wheel.png",
            title: "Wheel Chairs on salt",
            button: "Book Now"
        }
    ]
    const otherServices = [
        {
            image: "/checkup.png",
            title: "Corporate HealthCheckup",
            button: "Rent Now"
        },
        {
            image: "/covid.png",
            title: "Covid Test atHome",
            button: "Rent Now"
        },
        {
            image: "/homeopathy.png",
            title: "Homeopathy Treatment",
            button: "Rent Now"
        },
        {
            image: "/nature.png",
            title: "Naturopathy Treatment",
            button: "Rent Now"
        },
    ]
  return (
    <div className='bg-[#f1f0f1] flex flex-col items-center justify-center pt-20'>
        <h2 className='text-4xl font-poppins'>Medical Equipments</h2>
        <div className="flex flex-row gap-16 mt-12">
            {equipments.map((equipment, index) => (
                <EquipmentCard 
                    key={index}
                    image={equipment.image}
                    title={equipment.title}
                    button={equipment.button}
                />
            ))}
        </div>
       <div className='flex mt-30 flex-col items-center gap-8 mt-12'>
        <h2 className='text-4xl font-poppins'>Other Services</h2>
        <div className="flex flex-row gap-16 mb-12">
            {otherServices.map((otherService, index) => (
                <EquipmentCard 
                    key={index}
                    image={otherService.image}
                    title={otherService.title}
                    button={otherService.button}
                />
            ))}
        </div>
       </div>
    </div>
  )
}

export default Equipment