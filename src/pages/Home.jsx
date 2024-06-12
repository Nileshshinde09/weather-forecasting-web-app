import React, { useEffect, useState } from 'react';
import { Whether } from '@/services';
import { Loading, WhetherForcastCard } from '@/components'
import { useDispatch } from 'react-redux';
import { setForecastData } from '@/app/slices/whetherForecastSlice';
import { CITIES_FORCASTING } from '@/constants';
import { useToast } from '@/components/ui/use-toast';
const Home = () => {
  const { toast } = useToast()
  const dispatch = useDispatch();
  const [citiesForcasting, setCitiesForcasting] = useState(CITIES_FORCASTING[1])
  const [dateOptions, setDateOption] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const forecast = await Whether.ForecastWhether({ dateOptions, citiesForcasting });
        if (forecast) {
          dispatch(setForecastData(forecast))
        }

      } catch (error) {
        const err = error.message || "Something went wrong while fetching forecast data."
        toast(
          {
            title: err,
            variant: "destructive"
          }
        )
        console.log(err);
      } finally {
        setIsLoading(false)
      }
    })();
  }, [dateOptions, citiesForcasting]);

  return (
    <>
      {!isLoading ?
        <>
          <WhetherForcastCard
            setCitiesForcasting={setCitiesForcasting}
            setDateOption={setDateOption}
          />
        </>
        :
        <Loading className="mx-auto" />
      }
    </>
  );
};

export default Home;
