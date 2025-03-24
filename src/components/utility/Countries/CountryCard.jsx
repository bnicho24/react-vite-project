import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '@/redux/countriesSlice';
const CountryCard = ({name}) => {
//  const [countryData, setCountryData] = useState([]);
 const dispatch = useDispatch();
 const { country } = useSelector((state) => state.country);

   useEffect(()=> {

    if (name.length > 0) {
      dispatch(fetchCountries(name))
    }
   }, [name, dispatch]);

  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
           <div className="w-[300px] bg-white border mb-2 p-2 rounded-3">
             <div className="align-items-center flex p-2 rounded-3 position-relative bg-light-danger justify-content-between">
               <h4 className="font-weight-bolder mr-3">
                 {country?.name?.common}{" "}
                 {country?.name?.nativeName?.tam?.official}
               </h4>
               <img
                 src={country?.flags?.svg}
                 style={{ width: "50px", height: "auto" }}
                 alt={country?.flag}
               />
             </div>
             <div className="mywork-content m-2">
               <div>
                 <p>Capital: {country?.capital}</p>
                 <p>Continents: {country?.continents}</p>
                 <p>Population: {country?.population}</p>
               </div>
             </div>
           </div>
         </>
  )
}

export default CountryCard