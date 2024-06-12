import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CurrentWeather = () => {
  const data = useSelector((state) => state.forecast.data);
  const [condition, setCondition] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (data) {
      console.log(data.current);
      setCondition(data.current.condition);
      setWeatherData(data.current);
    }
  }, [data]);

  const renderTableRow = (key, value) => {
    if (typeof value === 'object' && value !== null) {
      return Object.entries(value).map(([subKey, subValue]) => (
        <TableRow key={key + subKey}>
          <TableCell className="font-medium">{`${key} - ${subKey}`}</TableCell>
          <TableCell>{subValue}</TableCell>
        </TableRow>
      ));
    }

    return (
      <TableRow key={key}>
        <TableCell className="font-medium">{key}</TableCell>
        <TableCell>{value}</TableCell>
      </TableRow>
    );
  };

  return (
    <div>
      {condition ? (
        <div key={condition.code} className="flex items-center justify-center">
          <img src={String(condition.icon)} alt={condition.text} className="mr-2" />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {condition.text}
          </h4>
        </div>
      ) : null}
      <div className="container mx-auto p-4">
        {weatherData ? (
          <Table>
            <TableCaption>Current Weather Information</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Metric</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(weatherData).map(([key, value]) => {
                return renderTableRow(key, value)
                })}
            </TableBody>
          </Table>
        ) : null}
      </div>
    </div>
  );
};

export default CurrentWeather;
