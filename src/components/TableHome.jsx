import React, { useEffect } from "react";
import avatar from "../img/avatar.png";

import { useDispatch, useSelector } from "react-redux";
import {
  SearchByYearSectionLocation,
  getAllUsers,
  getOneUser,
} from "../store/usersSlice";

const TableHome = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users.users.users);

  useEffect(() => {
    // dispatch(getAllUsers());
    // dispatch(
    //   SearchByYearSectionLocation({
    //     year: "3",
    //     section: "الصف الثالث الثانوي علم رياضة",
    //     location: "3",
    //   })
    // );
    // dispatch(getOneUser("123"));
  }, [dispatch]);
  return (
    <table className="  w-full flex-grow   ">
      <thead className="bg-lightGray text-tableHead">
        <tr>
          <th className="text-tableHead font-normal text-x-[16px]">
            <h2>الكورسات</h2>
          </th>
          <th className="text-tableHead font-normal text-x-[16px]">
            عدد الطلاب
          </th>
          <th className="text-tableHead font-normal text-x-[16px]">
            عدد الطلاب الممتحنين
          </th>
          <th className="text-tableHead font-normal text-x-[16px]">
            متوسط الدرجات
          </th>
          <th className="text-tableHead font-normal text-x-[16px] ">التاريخ</th>
          <th className="text-tableHead font-normal text-x-[14px] ">
            السنة الدراسية
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {state &&
          state.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <div className="flex justify-center items-center gap-4">
                    <div className="w-11 rounded-full overflow-hidden">
                      <img
                        src={user.profile_img ? user.profile_img : avatar}
                        alt=""
                      />
                    </div>
                    <div className="text-right">
                      <h1 className="font-medium  text-sm text-darkGray ">
                        {user.name}
                      </h1>
                      <p className="text-lightText text-[12px]">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td>1234567890</td>
                <td>1234567890</td>
                <td>
                  <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                    <p className="text-xs text-lightText font-normal m-auto">
                      65%
                    </p>
                  </div>
                </td>
                <td>1234567890</td>
                <td>
                  <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                    فتح
                  </p>
                </td>
              </tr>
            );
          })}
        {/* <tr>
          <td>
            <div className="flex justify-center items-center gap-4">
              <div className="w-11 rounded-full overflow-hidden">
                <img src={avatar} alt="" />
              </div>
              <div className="text-right">
                <h1 className="font-medium  text-sm text-darkGray ">
                  سيف الدين محمود
                </h1>
                <p className="text-lightText text-[12px]">
                  seenaseif@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td>1234567890</td>
          <td>1234567890</td>
          <td>
            <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
              <p className="text-xs text-lightText font-normal m-auto">65%</p>
            </div>
          </td>
          <td>1234567890</td>
          <td>
            <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
              فتح
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex justify-center items-center gap-4">
              <div className="w-11 rounded-full overflow-hidden">
                <img src={avatar} alt="" />
              </div>
              <div className="text-right">
                <h1 className="font-medium  text-sm text-darkGray ">
                  سيف الدين محمود
                </h1>
                <p className="text-lightText text-[12px]">
                  seenaseif@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td>1234567890</td>
          <td>1234567890</td>
          <td>
            <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
              <p className="text-xs text-lightText font-normal m-auto">65%</p>
            </div>
          </td>
          <td>1234567890</td>
          <td>
            <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
              فتح
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex justify-center items-center gap-4">
              <div className="w-11 rounded-full overflow-hidden">
                <img src={avatar} alt="" />
              </div>
              <div className="text-right">
                <h1 className="font-medium  text-sm text-darkGray ">
                  سيف الدين محمود
                </h1>
                <p className="text-lightText text-[12px]">
                  seenaseif@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td>1234567890</td>
          <td>1234567890</td>
          <td>
            <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
              <p className="text-xs text-lightText font-normal m-auto">65%</p>
            </div>
          </td>
          <td>1234567890</td>
          <td>
            <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
              فتح
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex justify-center items-center gap-4">
              <div className="w-11 rounded-full overflow-hidden">
                <img src={avatar} alt="" />
              </div>
              <div className="text-right">
                <h1 className="font-medium  text-sm text-darkGray ">
                  سيف الدين محمود
                </h1>
                <p className="text-lightText text-[12px]">
                  seenaseif@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td>1234567890</td>
          <td>1234567890</td>
          <td>
            <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
              <p className="text-xs text-lightText font-normal m-auto">65%</p>
            </div>
          </td>
          <td>1234567890</td>
          <td>
            <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
              فتح
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex justify-center items-center gap-4">
              <div className="w-11 rounded-full overflow-hidden">
                <img src={avatar} alt="" />
              </div>
              <div className="text-right">
                <h1 className="font-medium  text-sm text-darkGray ">
                  سيف الدين محمود
                </h1>
                <p className="text-lightText text-[12px]">
                  seenaseif@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td>1234567890</td>
          <td>1234567890</td>
          <td>
            <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
              <p className="text-xs text-lightText font-normal m-auto">65%</p>
            </div>
          </td>
          <td>1234567890</td>
          <td>
            <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
              فتح
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex justify-center items-center gap-4">
              <div className="w-11 rounded-full overflow-hidden">
                <img src={avatar} alt="" />
              </div>
              <div className="text-right">
                <h1 className="font-medium  text-sm text-darkGray ">
                  سيف الدين محمود
                </h1>
                <p className="text-lightText text-[12px]">
                  seenaseif@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td>1234567890</td>
          <td>1234567890</td>
          <td>
            <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
              <p className="text-xs text-lightText font-normal m-auto">65%</p>
            </div>
          </td>
          <td>1234567890</td>
          <td>
            <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
              فتح
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex justify-center items-center gap-4">
              <div className="w-11 rounded-full overflow-hidden">
                <img src={avatar} alt="" />
              </div>
              <div className="text-right">
                <h1 className="font-medium  text-sm text-darkGray ">
                  سيف الدين محمود
                </h1>
                <p className="text-lightText text-[12px]">
                  seenaseif@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td>1234567890</td>
          <td>1234567890</td>
          <td>
            <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
              <p className="text-xs text-lightText font-normal m-auto">65%</p>
            </div>
          </td>
          <td>1234567890</td>
          <td>
            <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
              فتح
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex justify-center items-center gap-4">
              <div className="w-11 rounded-full overflow-hidden">
                <img src={avatar} alt="" />
              </div>
              <div className="text-right">
                <h1 className="font-medium  text-sm text-darkGray ">
                  سيف الدين محمود
                </h1>
                <p className="text-lightText text-[12px]">
                  seenaseif@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td>1234567890</td>
          <td>1234567890</td>
          <td>
            <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
              <p className="text-xs text-lightText font-normal m-auto">65%</p>
            </div>
          </td>
          <td>1234567890</td>
          <td>
            <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
              فتح
            </p>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default TableHome;
