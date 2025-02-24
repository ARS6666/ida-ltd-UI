import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/General.css";
import img1 from "../Assets/response.png";
import "https://kit.fontawesome.com/6c2a0de8a3.js";
function Footer() {
  return (
    <div class="pt-5">
      <footer className=" text-primary  fontv border-top">
        <div className="container-xxxl  rounded p-5 pb-0 ">
          <div className="row ">
            <div className="col-md-4">
              <h5>درباره ما</h5>
              <p>
                شرکت دانش بنیان هوش داده هدف از سال 1394 با تجربه 10 ساله در
                حوزه های فناوری اطلاعات، هوشمند سازی و مانیتورینگ آنلاین
                فرآیندها شروع به فعالیت نموده است.این شرکت در سال 1396 موفق به
                استقرار در پارک علم و فناوری دانشگاه تحصیلات تکمیلی علوم پایه
                زنجان گردید و در پاییز 1396 رتبه دانش بنیانی این شرکت توسط
                معاونت علمی و فناوری ریاست جمهوری مورد تایید قرار گرفت.
              </p>
            </div>
            <div class="col-md-1"></div>
            <div className="col-md-3">
              <h5>دسترسی سریع</h5>
              <ul>
                <li>
                  <a class="link text-primary" href="/">
                    خانه
                  </a>
                </li>
                <li>
                  <a class="link text-primary" href="/about">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a class="link text-primary" href="/services">
                    خدمات
                  </a>
                </li>
                <li>
                  <a class="link text-primary" href="/about">
                    ارتباط با ما
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 ">
              <h5>تماس با ما</h5>
              <div class=" row">
                <div>
                  <i class="fa-solid fa-location-dot text-dark pt-1"></i>
                  <a class="link text-primary">
                    {" "}
                    زﻧﺠﺎن، ﺑﻠﻮار ﭘﺮﻓﺴﻮر ﺛﺒﻮﺗﯽ، ﭘــﺎرك ﻋﻠــﻢ و ﻓﻨـــــﺎورى ﺗﺤﺼﯿﻼت
                    ﺗﮑﻤﯿﻠﻰ ﻋﻠﻮم زﻧﺠﺎن، ﻃﺒﻘﻪ اول، واﺣﺪ107{" "}
                  </a>
                </div>
                <div>
                  <i class="fa-solid fa-phone text-dark pt-3 p-1"></i>
                  <a class="link text-primary">02433154315</a>
                </div>
                <div>
                  <i class="fa-solid fa-envelope text-dark pt-3 p-1"></i>
                  <a class="link text-primary">info@ida-ltd.com</a>
                </div>
                <div>
                  <div class="pt-2 " style={{ paddingRight: "25px" }}>
                    <a href="https://www.instagram.com/" class="hover">
                      <i class="fa-brands fa-instagram text-dark p-1 h4 border rounded-circle bg-light"></i>
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=ida-ltd.ir/">
                      <i class="fa-brands fa-facebook text-dark p-1 h4 border rounded-circle bg-light "></i>
                    </a>
                    <a href="https://twitter.com/share?url=ida-ltd.ir/">
                      <i class="fa-brands fa-twitter text-dark p-1 h4 border rounded-circle bg-light"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="pb-3">
            <img src={img1} style={{ width: "100%" }} />
          </div>
          <div
            class="linkb p-3 border-top"
            dir="ltr"
            style={{ paddingBottom: "0" }}
          >
            <div class="col-md-12  d-flex justify-content-center">
              © IDA Intelligent, Data, Aim , All Rights
              Reserved.
            </div>
            <div class="col-md-12  d-flex justify-content-center">
              Developed by <a href="https://github.com/ARS6666">Ars</a> &{" "}
              <a href="https://github.com/cactus1386">Cactus</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
