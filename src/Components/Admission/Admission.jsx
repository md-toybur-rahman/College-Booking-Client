// import React from 'react';

import useDataLoaded from "../Hooks/useDataLoaded";
import AdmissionRow from "./AdmissionRow";

const Admission = () => {
    const collegeData = useDataLoaded();
    return (
        <div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>College Name</th>
                        <th>Admission Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        collegeData.map(data => <AdmissionRow key={data._id} data={data}></AdmissionRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Admission;