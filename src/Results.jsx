import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  let name = formData.name;

  // =========================================
  // Copryright by Nattapong Nakaom 2024

  // เงินเดือนทั้งปี = 50000*12
  // โบนัส  = โบนัส
  // เงินได้ทั้งหมด = เงินเดือนทั้งปี+โบนัส
  // ค่าใช้จ่าย = 0.5*เงิินได้ทั้งหมด <= 100000 ? 0.5*เงินได้ทั้งหมด : 100000
  let salaryYear = parseInt(formData.salary) * 12;
  let bonus = parseInt(formData.bonus);
  let allMoney = salaryYear + bonus;
  let exp = 0.5 * allMoney <= 100000 ? 0.5 * allMoney : 100000;
  // =========================================

  // ถ้า x มากกว่า 5 ให้ดำเนินการ แต่ถ้าไม่ ให้ไปหา else
  // ตัวแปร = x < 5 ? ดำเนินการ(จริง) : ดำเนินเกิจ(เท็จ else);

  // =========================================
  // เงินตัวเอง = 60000
  // ค่าบุตร = จำนวนบุตร*30000 <= 60000 ? จำนวนบุตร*30000 : 60000
  // ประกันสังคม = ค่าประกันสังคม <= 30000 ? ค่าประกันสังคม : 30000
  // ประกันชีวิต = ค่าประกันชีวิต <= 100000 ? ค่าประกันชีวิต : 100000

  let self = 60000;
  let son =parseInt(formData.son) * 30000 <= 60000? parseInt(formData.son) * 30000: 60000;
  let pakransangkom =parseInt(formData.pakransangkom) <= 30000? parseInt(formData.pakransangkom): 30000;
  let pakranshevit =parseInt(formData.pakranshevit) <= 100000? parseInt(formData.pakranshevit): 100000;

  // ค่าลดหย่อน = เงินตัวเอง+ค่าประกันสังคม+ค่าประกันชีวิต
  let loadyoun = self + son + pakransangkom + pakranshevit;

  // เงินได้พึงประเมิน = เงินได้ทั้งหมด - ค่าใช้ได้ - ค่าลดหย่อน
  // อัตราภาษี = 0
  // นำไป if else จบ
  let income = allMoney - exp - loadyoun;
  let taxRate = 0;
  if (income <= 100000) {
    taxRate = 0;
  } else if (income <= 300000) {
    taxRate = 0.05;
  } else if (income <= 1000000) {
    taxRate = 0.1;
  } else {
    taxRate = 0.15;
  }

  // // =========================================

  // *****************************************************

  // โค้ดเขียนโดย นัฐพงษ์ นาคอ่วม และ อำนวยการเขียนโดย นาย ธนกร และ ขัน (Brainstorm)
  // ** No AI ChatBOT ** ||| Create with brian and love

  // *****************************************************

  return (
    <div>
      <div className="flex justify-center items-center h-screen p-5">
        <div className="max-w-2xl w-full bg-white shadow-2xl p-10 rounded-lg">
          <h1 className="text-xl sm:text-4xl text-indigo-800 mb-3 font-bold">
            <i class="fa-solid fa-book"></i> การคำนวณภาษีของคุณ {name}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
            <h2 className="shadow-sm">เงินได้ทั้งปี <span>{allMoney}</span> บาท</h2>
            <h2 className="shadow-sm">ค่าใช้จ่าย <span>{exp}</span> บาท</h2>
            <h2 className="shadow-sm">ค่าประกันสังคม <span>{pakransangkom}</span> บาท</h2>
            <h2 className="shadow-sm">ค่าลดหย่อน <span>{loadyoun}</span> บาท </h2>
            <h2 className="shadow-sm">เงินได้พึงประเมิน <span>{income}</span> บาท</h2>
            <h2 className="shadow-sm">อัตราภาษี <span>{taxRate * 100}</span>% </h2>
            <h2 className="shadow-sm last">ภาษีที่ต้องชำระ <span>{income * taxRate}</span> บาท</h2>
          </div>
          <div className="flex justify-end">
          <button className="w-24 p-1.5 rounded-md mt-1.5 bg-indigo-800 text-white">
            <NavLink to='/'><i class="fa-solid fa-chevron-left"></i> ย้อนกลับ</NavLink>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
