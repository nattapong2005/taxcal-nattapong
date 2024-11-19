import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen p-5">
        <form className="max-w-md w-full bg-white shadow-2xl p-6 rounded-lg" onSubmit={submitForm}>
          <h1 className="text-4xl text-indigo-800 font-bold mb-3"><i class="fa-solid fa-coins"></i> คำนวณภาษีเงินได้</h1>

          <div className="mb-4">
            <label>ชื่อ</label>
            <input required className="border border-gray-200 shadow-sm w-full p-1.5 rounded-lg" type="text" placeholder="กรอกชื่อของคุณ" name="name" onChange={handleChange} />
          </div>

          <div className="mb-4">
            <label>เงินเดือน</label>
            <input required className="border border-gray-200 shadow-sm w-full p-1.5 rounded-lg" type="text" placeholder="กรอกเงินเดือน" name="salary" onChange={handleChange} />
          </div>

          <div className="mb-4">
            <label>โบนัส/ปี</label>
            <input required className="border border-gray-200 shadow-sm w-full p-1.5 rounded-lg" type="text" placeholder="กรอกโบนัส" name="bonus" onChange={handleChange} />
          </div>

          <div className="mb-4">
            <label>ค่าประกันสังคม</label>
            <input required className="border border-gray-200 shadow-sm w-full p-1.5 rounded-lg" type="text" placeholder="กรอกค่าประกันสังคม" name="pakransangkom" onChange={handleChange} />
          </div>

          <div className="mb-4">
            <label>จำนวนบุตร</label>
            <input required className="border border-gray-200 shadow-sm w-full p-1.5 rounded-lg" type="text" placeholder="กรอกจำนวนบุตร" name="son" onChange={handleChange} />
          </div>

          <div className="mb-4">
            <label>เบี้ยประกันชีวิต</label>
            <input required className="border border-gray-200 shadow-sm w-full p-1.5 rounded-lg" type="text" placeholder="กรอกค่าเบี้้ยประกันสังคม" name="pakranshevit" onChange={handleChange} />
          </div>

          <button className="w-full bg-indigo-700 rounded-2xl font-semibold text-white p-2" type="submit"><i class="fa-solid fa-calculator"></i> คำนวณ</button>
        </form>
      </div>
    </>
  );
};
export default FormData;
