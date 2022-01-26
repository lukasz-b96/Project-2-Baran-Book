import { Row, Card, Collapse } from "antd";
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import "./css/Pages.css";

function About() {
  const { Panel } = Collapse;
  const img1 = (
    <img src="https://img.icons8.com/plumpy/24/26e07f/job.png" alt="ico" />
  );
  const img2 = (
    <img
      src="https://img.icons8.com/plumpy/24/26e07f/user-male.png"
      alt="ico"
    />
  );
  const img3 = (
    <img src="https://img.icons8.com/plumpy/24/26e07f/code.png" alt="ico" />
  );
  return (
    <DefaultLayout>
      <Row justify="center">
        <Card className=" card bs1" title="About This FullStack App">
          <ul className="aboutme justify-content-between">
            <li>
              {img1}
              <span>Sample web application deployed on Heroku. </span>
            </li>
            <li>
              {img1}
              <span>
                App created on MERN stack solution (MongoDB, Express.js,
                ReactJS, and Node.js)
              </span>
            </li>
            <li>
              {img1}
              <span>
                To use this website you have to create a unique user (with
                encrypted password on LocalStorage)
              </span>
            </li>
            <li>
              {img1}
              <span>
                Each user can create their own post, give a heart to posts of
                other users and find others.
              </span>
            </li>
            <li>
              {img1}
              <span>
                The server sends pictures as Base64 to "Cloudinary" and hosting
                response with URL link.
              </span>
            </li>
            <li>
              {img1}
              <span>
                You can and follow or unfollow other users, moreover, you can
                check who follows you.
              </span>
            </li>
            <li>
              {img1}
              <span>
                For each post, you need to add a photo but the description is
                not necessary.
              </span>
            </li>
            <li>
              {img1}
              <span>Validity of the chosen image is checked by the regex.</span>
            </li>
            <li>
              {img1}
              <span>
                Website has been built on Antd components with Bootstrap and
                custom CSS
              </span>
            </li>
            <li>
              {img1}
              <span>
                The website is responsive and scales correctly for mobile
                devices
              </span>
            </li>
            <li>
              <img
                src="https://img.icons8.com/plumpy/24/26e07f/overtime.png"
                alt="ico"
              />
              <span>
                In the future, I am going to add JWT authorization and infinite
                scrolling.
              </span>
            </li>
            <li>
              <img
                src="https://img.icons8.com/plumpy/24/26e07f/error--v1.png"
                alt="ico"
              />
              <span>
                I know I could better solutions from my Sahara Car Deals App,
                {<br></br>}
              </span>
              <span className="ml-4 pl-2">
                but I want to show different approaches on my portfolio
              </span>
            </li>
          </ul>
          <Collapse>
            <Panel header="About Me" key="1">
              <ul className="aboutme ">
                <li>
                  {img2}
                  <span>
                    Third-year student of Applied Computer Science at the
                    Jagiellonian University.
                  </span>
                </li>
                <li>
                  {img2}
                  <span>
                    I am a person who likes to work with people and spend free
                    time actively.
                  </span>
                </li>
                <li>
                  {img2}
                  <span>
                    Interested in sports, movie editing, traveling and going to
                    concerts.
                  </span>
                </li>
                <li>
                  {img2}
                  <span>I want to become a Web Developer.</span>
                </li>
              </ul>
            </Panel>
            <Panel header="My Skills" key="2">
              <ul className="aboutme ">
                <li>
                  {img3}
                  <span>Good knowledge in: Python, HTML, CSS</span>
                </li>
                <li>
                  {img3}
                  <span>
                    Medium knowledge of: C/C++, JavaScript, Java, SQL, GIT,
                    Bootstrap, Antd, EJS, NodeJs
                  </span>
                </li>
                <li>
                  {img3}
                  <span>Basics of: Angular, React </span>
                </li>
              </ul>
            </Panel>
            <Panel header="Contact Me!" key="3">
              <ul className="aboutme d-flex justify-content-between">
                <li>
                  {
                    <img
                      src="https://img.icons8.com/ios-filled/24/000000/linkedin.png"
                      alt="ico"
                    />
                  }
                  <a href="https://www.linkedin.com/in/%C5%82ukasz-baran-15813322b/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/github.png"
                    alt="ico"
                  />
                  <a href="https://github.com/lukasz-b96">GitHuB</a>
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/ios-filled/24/000000/apple-phone.png"
                    alt="ico"
                  />
                  <span>792 256 101</span>
                </li>
              </ul>
            </Panel>
          </Collapse>
        </Card>
      </Row>
    </DefaultLayout>
  );
}

export default About;
