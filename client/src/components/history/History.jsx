import React from "react";
import "./css/history.css";

const History = () => {
  return (
    <div className="history">
      <div className="title">
        <h1>HISTORY</h1>
      </div>
      <div className="body">
        <div className="section section1">
          <div className="img">
            <img src="./assets/main.jpg" alt="Main" />
            <div className="img-text">
              <span>A New Beginning</span>
            </div>
          </div>
          <div className="content">
            <div className="description">
              <p>
                Faculty of Computing and Information Technology (FCIT) was
                established in January, 2021. The unprecedented growth of
                Computer and Information Technology sector, both nationally and
                internationally, provided the impetus for the establishment of
                four distinct departments under the umbrella of FCIT; namely
                Department of Computer Science, Department of Software
                Engineering, Department of Information Technology and Department
                of Data Science. Prior to the establishment of FCIT, PUCIT was
                placed under the Faculty of Science. Given the significance and
                impact of computing, the establishment of an independent
                computing faculty became the need of the hour.
              </p>
            </div>
          </div>
        </div>
        <div className="section section2">
          <div className="img">
            <img src="./assets/lab.jpg" alt="LAB" />
            <div className="img-text">
              {" "}
              <span>The Early Phase</span>
            </div>
          </div>
          <div className="content">
            <div className="description">
              <p>
                In the year 1988, the Center for Computer Science was
                established in the Center for Solid State Physics, Quaid-e-Azam
                Campus, Lahore. In a short span of three years that is on
                September 10, 1991 the Center was upgraded to Department of
                Computer Science and was made part of Faculty of Engineering and
                Technology on September 18, 1991. Later the department was made
                a part of Faculty of Science in October, 2000. On November 11,
                2000, the Department of Computer Science was upgraded to a
                Constituent College and was named Punjab University College of
                Information Technology (PUCIT). Furthermore, the GIS Center
                became a part of PUCIT on September 8, 2004 but later started
                working in an independent capacity from October 31, 2014.
              </p>
            </div>
          </div>
        </div>
        <div className="section section3">
          <div className="img">
            <img src="./assets/new-campus-fcit.jpg" alt="New Campus FCIT" />
            <div className="img-text">
              <span>development of Academic Programs</span>
            </div>
          </div>
          <div className="content">
            <div className="description">
              {" "}
              <p>
                The first degree program offered by the Center for Computer
                Science was a one-year Post Graduate Diploma (PGD) in Computer
                Science. 24 students were registered in this program during the
                first year. Whereas, after the establishment of the Department
                of Computer Science a 2-year Post Graduate Diploma (PGD) leading
                to MSc in Computer Science was offered. The College also
                launched a 4-year BSc (Honors) in Computer Science program in
                November 2000. The classes of the new program started in January
                2001 with 180 students. The PGD leading to MSc in Computer
                Science was converted to MSc in Computer Science in February
                2001. The College launched 4-year Bachelor of Science in
                Information Technology (BIT), 2-year Master in Information
                Technology (MIT), Master in Electronic Commerce (M. E-Com), and
                3-year MPhil leading to PhD in Computer Science in 2003.
                MS/MPhil Computer Science and MSc GIS programs were launched in
                2006 and BS Software Engineering in 2007.
                <br />
                <br />
                Apart from offering various academic programs PUCIT also
                established its own Internet Service Provider (ISP) and a
                software house, Agile Technologies, for automating key business
                processes in the College and bridging the gap between industry
                and academia.
              </p>
            </div>
          </div>
        </div>
        <div className="section section4">
          <div className="img">
            <img src="./assets/pu-cad.jpg" alt="CAD" />
            <div className="img-text">
              <span>Infrastructure Development</span>
            </div>
          </div>
          <div className="content">
            <div className="description">
              {" "}
              <p>
                The College started infrastructure renovation work in June 2006
                and renovated the old faculty offices, constructed 30 new
                faculty offices, installed new multimedia equipment and PCs in
                lecture rooms and computer labs, purchased new PCs for the GIS
                Centre lab, installed underground campus computer network and
                upgraded the library as well. The first ever PC-1 since the
                establishment of the College was submitted to the Education
                Department Government of Punjab in May 2007 for Rs. 11.3 Million
                funding for upgrading IT infrastructure of the College. The
                funding was released in June 2007 and used to purchase 200 new
                PCs for labs and three high-end server class machines. Two more
                PC-1 documents were submitted for Rs. 99.61 Million funding from
                the HEC to build the Software Engineering Block and Rs. 74.36
                Million funding from the Education Department Government of
                Punjab to construct a multi-purpose building, upgrade lab
                infrastructure, establish final-year project labs, construct 10
                start-up incubators, and establish wireless “hot spots”
                throughout the College. Process for the construction of two new
                buildings through College and University funds was initiated in
                June and July 2007. <br />
                <br />
                Furthermore, the land for PUCIT New Campus was acquired in 2009
                and the GIS Center building was inaugurated on December 30,
                2011. The Computer Science floor in the GIS Center building was
                completed in 2013 and the IT Center building at PUCIT New Campus
                became functional in 2014. <br />
                <br />
                Moreover, the idea to build a campus based Software Technology
                Park (STP), to promote and facilitate industry-academia
                linkages, was materialized on September 19, 2018 with the
                groundbreaking ceremony at PUCIT New Campus.
                <br />
                <br /> With the restructuring of the University of the Punjab
                and the consequent emergence of four distinct departments under
                the Faculty of Computing and Information Technology (FCIT), the
                construction of a new academic block was approved. The
                foundation stone laying ceremony of the new Academic Block was
                held at PUCIT New Campus on June 10, 2021.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
