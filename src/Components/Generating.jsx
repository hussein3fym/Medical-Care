import React from "react";
import { IoIosSend } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
const Generating = () => {
  return (
    <div className="generate">
      <h1>Medical Care</h1>
      <p>
        Medical Care is a web application that helps you find the nearest
        medical facilities.
      </p>
      <div className="test">
        {/* <p>
          Medical care is an essential aspect of maintaining overall health and
          well-being. Access to quality medical care ensures timely diagnosis,
          treatment, and management of various health conditions. Whether
          it&apos;s routine check-ups, preventive screenings, or specialized
          treatments, medical care plays a vital role in promoting longevity and
          improving quality of life. In today&apos;s modern healthcare
          landscape, advancements in medical technology and research have
          revolutionized the way medical care is delivered, offering innovative
          treatments and therapies to address a wide range of health issues.
          From primary care physicians to specialists in fields such as
          cardiology, oncology, and neurology, the medical care team
          collaborates to provide personalized care tailored to individual
          needs. Additionally, medical care extends beyond clinical settings,
          encompassing holistic approaches such as mental health counseling,
          nutritional guidance, and physical therapy to address the diverse
          needs of patients. Accessible and affordable medical care is
          fundamental to achieving health equity and ensuring that everyone has
          the opportunity to live a healthy and fulfilling life. As society
          continues to evolve, the importance of prioritizing medical care as a
          fundamental human right cannot be overstated. By investing in
          comprehensive healthcare systems and promoting preventive measures, we
          can pave the way for a healthier future for generations to
          come.111111111111 Medical care is an essential aspect of maintaining
          overall health and well-being. Access to quality medical care ensures
          timely diagnosis, treatment, and management of various health
          conditions. Whether it&apos;s routine check-ups, preventive
          screenings, or specialized treatments, medical care plays a vital role
          in promoting longevity and improving quality of life. In today&apos;s
          modern healthcare landscape, advancements in medical technology and
          research have revolutionized the way medical care is delivered,
          offering innovative treatments and therapies to address a wide range
          of health issues. From primary care physicians to specialists in
          fields such as cardiology, oncology, and neurology, the medical care
          team collaborates to provide personalized care tailored to individual
          needs. Additionally, medical care extends beyond clinical settings,
          encompassing holistic approaches such as mental health counseling,
          nutritional guidance, and physical therapy to address the diverse
          needs of patients. Accessible and affordable medical care is
          fundamental to achieving health equity and ensuring that everyone has
          the opportunity to live a healthy and fulfilling life. As society
          continues to evolve, the importance of prioritizing medical care as a
          fundamental human right cannot be overstated. By investing in
          comprehensive healthcare systems and promoting preventive measures, we
          can pave the way for a healthier future for generations to come.
        </p> */}
      </div>
      <label className="ask">
        <input
          type="text"
          placeholder="How can we help you today?"
          className="askInput"
        />
        <ImAttachment className="attach-icon" />
        <IoIosSend className="send-icon" />
      </label>
    </div>
  );
};

export default Generating;
