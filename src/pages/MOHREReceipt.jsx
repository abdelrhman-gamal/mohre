import logoMohre from '../assets/images/logo-mohre.png';
import outputOnlinejpgtools from '../assets/images/qrcode.png';
import letterStamp2 from '../assets/images/letterstamp2.png';
import footer from '../assets/images/footer.png';
import btnDownload from '../assets/images/btn-download.png';

export default function MOHREReceipt() {
  return <>
    <div className="back-button-wrapp mt-3 text-center">
        <a id="printpdf_download_main" href="javascript:void(0);" className="btn btn-secondary btn-pdf">
            <img id="printpdf_download" alt="download pdf" src={btnDownload} />
            Download pdf
        </a>
	</div>
    <div className="receipt-container">
      <div className="header">
        <div className="three-column">
          <div className="single-colum">
              <div className="logo-holder">
                  <img src={logoMohre} alt="Logo" />
              </div>
              <div className="tans-info">
                  <div className="barcode-holder">
                      <span id="CoverPage2_lblBarCode" className="Barcode" style={{"fontFamily": 'Free 3 of 9'}}>*RP241902457AE*</span>
                  </div>
                  <div className="trans-details" style={{marginTop: "-0.25rem"}}>
                      <span className="tans-number">RP241902457AE</span>
                      <span className="trans-amount"><br/><strong> &nbsp; القيمة:</strong> 0.0 AED</span>
                  </div>
              </div>
          </div>
          <div className="single-colum">
              <div className="trans-entry">
                  <span className="entry-title">
                      Date / التاريخ
                  </span>
                  <span className="entry-detail">
                      <span className="block">21:24:50</span>
                      <span className="block">30/09/2025</span>
                  </span>
              </div>
          </div>
          <div className="single-colum">
              <div className="trans-entry">
                  <span className="entry-title">
                      Type of Transaction / نوع المعاملة
                  </span>
                  <span className="entry-detail">
                      <div className="long-text">
                          Letter of Experience
                      </div>
                      <div className="long-text dir-right">
                          طلب شهادة لمن يهمه الامر
                      </div>
                  </span>
              </div>
          </div>
      </div>
      <div className="qr-code-box">
        <img src={outputOnlinejpgtools} id="imgQRCode" style={{
            height:"auto",
            width:"100% !important"
        }} title=""></img>
        <div style={{textAlign:"center"}}>
            <p className="qr-info" style={{fontSize:"smaller"}} title="">Scan QR to verify</p>
            <p className="qr-info" style={{fontSize:"smaller"}}>QR يمكنك التحقق بمسح ال</p>
        </div>
    </div>
      </div>
      <table>
        <thead>
            <tr>
                <td>
                    <div className="header-space">&nbsp;</div>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div className="content" title="">
            <h3 title="">To Whom It May Concern/شهادة لمن يهمه الامر  </h3>
            <div className="two-coloumn" title="">

                <div className="col-1 align-left">
                    <p>The Ministry of Human Resources and Emiratisation certifies that <strong>Mr: RADY MOHAMED ABDELWAHAB ABDELHAMID ELYAMANY</strong> of  <strong>EGYPT</strong> Nationality, holding passport number <strong>A28272589</strong>, has been issued a work permit as detailed below:</p>

                </div>
                <div className="col-1 align-right" title="">
                    <p title="">تشهد وزارة الموارد البشرية والتوطين أن  <strong title="">السيد: راضي محمد عبد الوهاب عبد الحميد اليمنى</strong> وجنسيته <strong title="">مصر</strong> ويحمل جواز سفر رقم <strong title="">A28272589 </strong> قد صدر له تصريح عمل كما هو موضح ادناه</p>
                </div>
            </div>
    <div className="trans-table">
    <table className="content-table table-data">
    <thead>
        <tr>
            <th width="25%">
                <div className="block">Establishment Name</div>
                <div className="block">اسم المنشأة</div>
            </th>
            <th>
                <div className="block">Job Title</div>
                <div className="block">الوظيفة</div>
            </th>
            <th width="20%">
                <div className="block">Contract Start</div>
                <div className="block">بداية العقد</div>
            </th>
            <th>
                <div className="block">Contract End</div>
                <div className="block">نهاية العقد</div>
            </th>
            <th>
                <div className="block" title="">Experience Period</div>
                <div className="block">سنوات الخبرة</div>
            </th>
        </tr>
    </thead>
    <tbody><tr><td><div className="block">FAST ENERGY CONTRACTING   GENERAL  MAINTENANCE GENERAL L L C</div><div className="block">شركه الطاقه السريعه للمقاولات والصيانه العامه ذ م م</div></td><td><div className="block">MECHANICAL ENGR GEN MAINTENANC</div><div className="block">مهندس  ميكانيكي / صيانة عامة</div></td><td><div className="block">27/02/2009</div></td><td><div className="block">30/06/2009</div></td><td><div className="block">0 Year(s), 4 Month(s), 3 Day(s)</div><div className="block arabic-align">0 السنوات, 4 الأشهر, 3 الأيام</div></td></tr>
<tr><td><div className="block">FAST ENERGY CONTRACTING   GENERAL  MAINTENANCE GENERAL L L C</div><div className="block">شركه الطاقه السريعه للمقاولات والصيانه العامه ذ م م</div></td><td><div className="block">MECHANICAL ENGR GEN MAINTENANC</div><div className="block">مهندس  ميكانيكي / صيانة عامة</div></td><td><div className="block">08/01/2013</div></td><td><div className="block">08/01/2015</div></td><td><div className="block">2 Year(s), 0 Month(s), 0 Day(s)</div><div className="block arabic-align">2 السنوات, 0 الأشهر, 0 الأيام</div></td></tr>
    <tr><td><div className="block">KHAIR HAMDA HOTEL MANAGEMENT</div><div className="block">خير حمدة لإدارة الفنادق</div></td><td><div className="block">COMMERCIAL SALES REPRESENTATIVE</div><div className="block">مندوب مبيعات تجارية</div></td><td><div className="block">18/02/2024</div></td><td><div className="block">18/02/2026</div></td><td><div className="block">1 Year(s), 7 Month(s), 13 Day(s)</div><div className="block arabic-align">1 السنوات, 7 الأشهر, 13 الأيام</div></td></tr>
    
</tbody>
    </table>
    </div>
        <div className="two-coloumn">
            <div className="new-wrap">
                <div className="col-1 align-left">
                    <ul>
                        <li>This certificate was issued upon the request of the aforementioned, based on the data recorded in the ministry's systems as of the date of issuance of this certificate, without the ministry bearing any responsibility towards third parties.</li> 
                        <li>This certificate is electronically certified.</li>
                    </ul>
                </div>
                <div className="col-1 align-right">
                    <ul>
                        <li>تم إصدار هذه الشهادة بناء على طلب المذكور أعلاه، ووفق البيانات المقيدة في أنظمة الوزارة لتاريخ صدور هذه الشهادة ، دون تحمل الوزارة المسؤولية اتجاه الغير.</li> 
                        <li>هذه الشهادة موقعة الكترونياً.</li>
                    </ul>
                </div>
            </div>
            <div className="text-center letter-stamp">
                <h3>وزارة الموارد البشرية والتوطين</h3>
                <img src={letterStamp2} alt="Letter Stamp" />
            </div>
                </div>
                    </div>
                </td>
            </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        <div className="footer-space">&nbsp;</div>
                    </td>
                </tr>
            </tfoot>
        </table>
        <div className="footer">
            <img src={footer} alt="Img Footer" />
            <div className="footer-bottom">
                    <span className="right-footer">. - MS20256342755 - راضى محمد عبدالوهاب عبدالحميد اليمنى</span>
                    <span className="left-footer">RADY MOHAMED ABDELWAHAB ABDELHAMID ELYAMANY - MS20256342755 - .</span>
                    <span className="center-footer"><strong>30/09/2025 21:24:50</strong></span>
        
            </div>
            <br />
            <span className="left-footer">Printing Date &amp; Time: 01/10/2025 3:33:35 PM</span>
            <span className="right-footer">
                تاريخ ووقت الطباعة 01‏/10‏/2025 3:33:35 م
            </span>
        </div>
    </div>
  </>
}