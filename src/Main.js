// Main.js
import React, {useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import useSubmit from "./useSubmit";
import {useAlertContext} from "./alertContext";
import { useState } from "react";

const Main = () => {
  const [isSuccess, setIsSuccess] = useState(false); // 状态变量来控制成功时的显示

  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      numberOfPeople: "1",
      date: "",
      time: "",
    },

    onSubmit: (values) => {
      console.log("Form values on submit:", values); // 输出 values 的内容
      submit('/', values);
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      phoneNumber: Yup.string().required("Required"),
      // numberOfPeople: Yup.string().required("Please select number of people"),
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
    }),

    validateOnChange: false, // 禁止在每次输入变化时触发验证
    validateOnBlur: false,   // 禁止在字段失去焦点时触发验证

  });

  useEffect(() => {
    if (response) {
      console.log("Response detected:", response); // 确认 response 是否发生了变化
      if (response.type === 'success') {
        setIsSuccess(true);
        // onOpen('success', response.message);
        // formik.resetForm();
        return 
      } else if (response.type === 'error') {
        // onOpen('error', response.message);
        setIsSuccess(false);
      }
    }
  }, [response]); // 确保 response 是 useEffect 的依赖项

  return (
    <main>
      <div className="group">
        <div className="overlap-group">
          <img className="ivan-stern" alt="Ivan stern" src="/ivan-stern-lolsb7m6xku-unsplash-1.png" />
          <div className="rectangle" />
        </div>
      </div>
      
      <div className="div">
        <div class="flex-box-1">
          <div class="logo-lemon-box"><img class="logo-lemon" src="/Asset 9@4x.png"></img></div>
          <div className="text-wrapper">Little Lemon</div>
        </div>
        
        <p className="p">COCKTAILS . LIVE MUSIC . RESTAURANT . EVENTS</p>
      </div>

<     div className="group-4">
        <div className="overlap-2">
          {isSuccess ? (
            <div className="rectangle-confirm"/>
            
          ) : (
            <div className="rectangle-2"/>
          )}

          {isSuccess ? (
            <p className="make-a-reservation">
              <span className="span">Reservation</span>
              <span className="text-wrapper-4">Confirm</span>
            </p>
            
          ) : (
            <p className="make-a-reservation">
              <span className="span">Make A</span>
              <span className="text-wrapper-4">Reservation</span>
            </p>
          )}
          
          {/* 根据 isSuccess 状态渲染不同的元素 */}
          {isSuccess ? (
              <div className="infor">
                <div className="confirm-item-box">
                  <div className="confirm-item-area">
                      <div className="input-lable">Full Name:</div>
                      <div className="confirm-item-value">{formik.values.fullName}</div>
                  </div>
                </div>
                <div className="confirm-item-box">
                  <div className="confirm-item-area">
                      <div className="input-lable">Phone Number:</div>
                      <div className="confirm-item-value">{formik.values.phoneNumber}</div>
                  </div>
                </div>
                <div className="confirm-item-box">
                  <div className="confirm-item-area">
                      <div className="input-lable">Number of People:</div>
                      <div className="confirm-item">{formik.values.numberOfPeople}</div>
                  </div>
                </div>
                <div className="confirm-item-box">
                  <div className="confirm-item-area">
                      <div className="input-lable">Pick a Date:</div>
                      <div className="confirm-item">{formik.values.date}</div>
                  </div>
                </div>
                <div className="confirm-item-box">
                  <div className="confirm-item-area">
                      <div className="input-lable">Pick Time:</div>
                      <div className="confirm-item">{formik.values.time}</div>
                  </div>
                </div>
              </div>
          ) : (
            <form className="infor" onSubmit={formik.handleSubmit}>
              <div className="line-1">
                
                <div className="full-name">
                  <div className="input-line" isInvalid={formik.touched.fullName && formik.errors.fullName}>
                    <div className="input-lable">Full Name*</div>
                    <input
                      className="full-name-input-area"
                      name="fullName"
                      id="fullName"
                      {...formik.getFieldProps('fullName')}
                    />
                  </div>
                  <img className="line" alt="Line" src="/line.svg" />
                  <div class="error-message">{formik.errors.fullName}</div>
                </div>

                <div className="phone-number">
                  <div className="input-line" isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}>
                    <div className="input-lable">Phone Number*</div>
                    <input
                      className="phone-number-input-area"
                      name="phoneNumber"
                      id="phoneNumber"
                      {...formik.getFieldProps('phoneNumber')}
                    />
                  </div>
                  <img className="line" alt="Line" src="/line.svg" />
                  <div class="error-message">{formik.errors.phoneNumber}</div>
                </div>
              </div>

              <div className="line-2">

                <div className="nop">
                  <div className="input-line" isInvalid={formik.touched.numberOfPeople && formik.errors.numberOfPeople}>
                    <div className="input-lable">Number of People*</div>
                    <select
                      className="nop-input-area"
                      name="numberOfPeople"
                      id="numberOfPeople"
                      {...formik.getFieldProps('numberOfPeople')}
                    >
                      {[...Array(10).keys()].map((n) => (
                        <option key={n + 1} value={n + 1}>
                          {n + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <img className="line" alt="Line" src="/line.svg" />
                  <div class="error-message">{formik.errors.numberOfPeople}</div>
                </div>

                <div className="date">
                  <div className="input-line" isInvalid={formik.touched.date && formik.errors.date}>
                    <div className="input-lable">Pick a Date</div>
                    <input
                      className="date-input-area"
                      type="date"
                      name="date"
                      id="date"
                      {...formik.getFieldProps('date')}
                    />
                    <img className="date-icon" src="/vector.svg" />
                  </div>
                  <img className="line" alt="Line" src="/line.svg" />
                  <div class="error-message">{formik.errors.date}</div>
                </div>

                <div className="time">
                  <div className="input-line" isInvalid={formik.touched.time && formik.errors.time}>
                    <div className="input-lable">Pick Time</div>
                    <input
                      className="time-input-area"
                      type="time"
                      name="time"
                      id="time"
                      defaultValue="08:30"
                      {...formik.getFieldProps('time')}
                    />
                    <img className="date-icon" src="/vector.svg" />
                  </div>
                  <img className="line" alt="Line" src="/line.svg" />
                  <div class="error-message">{formik.errors.time}</div>
                </div>
              </div>

              <div className="button-area">
                <button className="button" type="submit" isLoading={isLoading}> 
                  <div className="button-text">BOOK A TABLE</div>
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
        
        
        

          

      


    </main>
  );
};

export default Main;
