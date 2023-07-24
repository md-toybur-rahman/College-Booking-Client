
import { Link, useLocation } from "react-router-dom";


const AdmissionRow = ({ data }) => {
    const location = useLocation();
    return (
        <tr data-aos="fade-right" data-aos-duration="1000" className="border-b-2 ">
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                data.college_image ?
                                    <img src={data.college_image} alt="" /> :
                                    <img src="https://i.ibb.co/KxN1BZH/kindpng-3765565-1.png" alt="" />
                            }
                        </div>
                    </div>
                </div>
            </td>
            <td>{data.college_name}</td>
            <td>{data.admission_date}</td>
            <th>
                <Link to={`/admissionForm`} state={{ from: location }}><button className="btn btn-active btn-ghost btn-xs ml-4">Admit Now</button></Link>
            </th>
        </tr>
    );
};

export default AdmissionRow;