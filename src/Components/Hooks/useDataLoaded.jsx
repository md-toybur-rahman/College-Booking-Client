import { useEffect, useState } from "react";

const useDataLoaded = () => {
    const [collegeData, setCollegeData] = useState([]);
    useEffect(() => {
        fetch('https://college-booking-server-sable.vercel.app/info')
            .then(res => res.json())
            .then(data => setCollegeData(data));
    }, [])
    return collegeData;
};

export default useDataLoaded;