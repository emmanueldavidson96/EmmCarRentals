"use client";
import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Home/Hero";
import SearchInput from "./components/SearchInput";
import CarsFilterOption from "./components/Home/CarsFilterOption";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import CarsList from "./components/Home/CarsList";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([])
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  
  useEffect(() => {
    getCarList()    
  }, [])

  const getCarList = async () => {
    const result:any = await getCarsList()
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists)    
  }

  const filterCarList = (brand:string) => {
    const filterList = carsOrgList.filter((item:any) => 
      item.carBrand == brand
    );
    setCarsList(filterList);  
  }

  const orderCarList = (order:any) => {
    const sortedData = [...carsOrgList].sort((a,b) =>
    order==-1? a.price - b.price:b.price - a.price);
    setCarsList(sortedData)
  }

  return (
    <main className="p-5 sm:px-10 md:px-20">
      <Hero/>
      <SearchInput/>
      <CarsFilterOption orderCarList={(value:string) => orderCarList(value)} carsList={carsOrgList} setBrand={(value:string) => filterCarList(value)}/>   
      <CarsList carsList={carsList}/>    
    </main>
  );
}
