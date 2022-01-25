import { Row, Card, Collapse } from "antd";
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import "./css/Pages.css";

function About() {
  const { Panel } = Collapse;
  const img1 = <img src="https://img.icons8.com/plumpy/24/26e07f/job.png" />;
  const img2 = (
    <img src="https://img.icons8.com/plumpy/24/26e07f/user-male.png" />
  );
  const img3 = <img src="https://img.icons8.com/plumpy/24/26e07f/code.png" />;
  return (
    <DefaultLayout>
      <Row justify="center">
        <Card className="mt-2 card bs1" title="About This FullStack App">
          <ul className="aboutme justify-content-between">
            <li>
              {img1}
              <a>Sample web application deployed on Heroku. </a>
            </li>
            <li>
              {img1}
              <a>
                App created on MERN stack solution (MongoDB, Express.js,
                ReactJS, and Node.js)
              </a>
            </li>
            <li>
              {img1}
              <a>
                The server sends pictures as Base64 to "Cloudinary" and hosting
                response with URL link.
              </a>
            </li>
            <li>
              {img1}
              <a>
                To use this website you have to create a unique user (with
                encrypted password on LocalStorage)
              </a>
            </li>
            <li>
              {img1}
              <a>
                Each user can create their own post, give a heart to posts of
                other users and find others.
              </a>
            </li>
            <li>
              {img1}
              <a>
                You can and follow or unfollow other users, moreover, you can
                check who follows you.
              </a>
            </li>
            <li>
              {img1}
              <a>
                For each post, you need to add a photo but the description is
                not necessary.
              </a>
            </li>
            <li>
              {img1}
              <a>Validity of the chosen image is checked by the regex.</a>
            </li>
            <li>
              {img1}
              <a>
                Website has been built on Antd components with Bootstrap and
                custom CSS
              </a>
            </li>
            <li>
              <img src="https://img.icons8.com/plumpy/24/26e07f/overtime.png" />
              <a>
                In the future, I am going to add JWT authorization and infinite
                scrolling.
              </a>
            </li>
          </ul>
          <Collapse >
            <Panel header="About Me" key="1">
              <ul className="aboutme ">
                <li>
                  {img2}
                  <a>
                    Third-year student of Applied Computer Science at the
                    Jagiellonian University.
                  </a>
                </li>
                <li>
                  {img2}
                  <a>
                    I am a person who likes to work with people and spend free
                    time actively.
                  </a>
                </li>
                <li>
                  {img2}
                  <a>
                    Interested in sports, movie editing, traveling and going to
                    concerts.
                  </a>
                </li>
                <li>
                  {img2}
                  <a>I want to become a Front-End Developer.</a>
                </li>
              </ul>
            </Panel>
            <Panel header="My Skills" key="2">
              <ul className="aboutme ">
                <li>
                  {img3}
                  <a>Good knowledge in: Python, HTML, CSS</a>
                </li>
                <li>
                  {img3}
                  <a>
                    Medium knowledge of: C/C++, JavaScript, Java, SQL, GIT,
                    Bootstrap, Antd, EJS, NodeJs
                  </a>
                </li>
                <li>
                  {img3}
                  <a>Basics of: Angular, React </a>
                </li>
              </ul>
            </Panel>
            <Panel header="Contact Me!" key="3">
              <ul className="aboutme d-flex justify-content-between">
                <li>
                  {
                    <img src="https://img.icons8.com/ios-filled/24/000000/linkedin.png" />
                  }
                  <a href="https://www.linkedin.com/in/%C5%82ukasz-baran-15813322b/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <img src="https://img.icons8.com/material-outlined/24/000000/github.png" />
                  <a href="https://github.com/lukasz-b96">GitHuB</a>
                </li>
                <li>
                  <img src="https://img.icons8.com/ios-filled/24/000000/apple-phone.png" />
                  <a>792 256 101</a>
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
