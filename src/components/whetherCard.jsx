import React from 'react';
import { Drawer } from 'vaul';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CITIES_FORCASTING } from '@/constants';
import { useForm } from 'react-hook-form';

const WeatherCard = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    // Example date options
    const DATE_OPTIONS = ["2024-06-10", "2024-06-11", "2024-06-12"];

    return (
        <Drawer>
            <div className='mx-auto no-scrollbar overflow-y-scroll h-[800px] pb-[15rem]'>
                <Form>
                    <form className="space-y-8 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className=''>
                            <div className='sm:flex space-x-2'>
                                <FormField
                                    control={control}
                                    name="cities"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Cities</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select City" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {CITIES_FORCASTING && CITIES_FORCASTING
                                                        .map((city, index) => (
                                                            <SelectItem key={index} value={city}>{city}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={control}
                                    name="forecasting_Date"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Forecasting Date</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Date" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {DATE_OPTIONS && DATE_OPTIONS
                                                        .map((date, index) => (
                                                            <SelectItem key={index} value={date}>{date}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </Drawer>
    );
};

export default WeatherCard;
