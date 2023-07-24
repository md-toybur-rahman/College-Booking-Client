import { useEffect, useState } from "react";

const useDataLoaded = () => {
    const [collegeData, setCollegeData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setCollegeData(data));
    }, [])
    return collegeData;
};

export default useDataLoaded;