import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CITIES_FORCASTING } from '@/constants'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Drawer } from './ui/drawer'
import { getDates } from '@/utils'
import { CurrentWhether } from '.'

const WhetherForcastCard = ({setCitiesForcasting,setDateOption}) => {
    const DATE_OPTIONS = getDates();

    return (
        <div className='mx-auto'>
            <Drawer>
                <div className='mx-auto no-scrollbar overflow-y-scroll h-[800px] pb-[15rem]'>
                    <div className='space-y-8 mx-auto'>
                        <div className='sm:flex space-x-2 justify-center'>
                            <Select defaultValue={CITIES_FORCASTING[1]} onValueChange={(val) => { setCitiesForcasting(val) }}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select City For Forecast" />
                                </SelectTrigger>
                                <SelectContent>
                                    {CITIES_FORCASTING && CITIES_FORCASTING
                                        .map((city, index) => { 
                                            return <SelectItem key={index} value={city}>{city}</SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>
                            <Select defaultValue={DATE_OPTIONS[0]} onValueChange={(val) => { setDateOption(DATE_OPTIONS.indexOf(val)) }}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select Forecast Date" />
                                </SelectTrigger>
                                <SelectContent>
                                    {DATE_OPTIONS && DATE_OPTIONS
                                        .map((date, index) => {
                                            return <SelectItem key={index} value={date}>{date}</SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                        <CurrentWhether/>
                </div>
            </Drawer>
        </div>
    )
}

export default WhetherForcastCard

