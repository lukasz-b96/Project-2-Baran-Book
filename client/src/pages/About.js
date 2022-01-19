//rfce react function components export
import { Form, Col, Row, Input, Button, Card, Collapse, Panel } from "antd";
import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import "./Addpost.css";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postActions";

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
        <Card className="mt-5 card" title="Default size card">
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
                The website allows you to create a unique user with an encrypted
                password. You have to create a user to use the website.
              </a>
            </li>
            <li>
              {img1}
              <a>
                Each user can create their own post, give a heart to posts of
                other users, find other users and follow or unfollow them.
                Moreover, we can check who follows us.
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
              <a>
                The entire website has been built on antd components and some
                react-bootstrap styling with custom CSS.
              </a>
            </li>
            <li>
              {img1}
              <a>
                In the future, I am going to add JWT authorization and infinite
                scrolling.
              </a>
            </li>
          </ul>
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="About Me" key="1">
              <ul className="aboutme ">
                <li>
                  {img2}
                  <a>
                    Third-year student at the Faculty of Physics, Astrology and
                    Applied Computer Science
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
              </ul>
            </Panel>
            <Panel header="My Skills" key="2">
              <ul className="aboutme ">
                <li>
                  {img3}
                  <a>Good knowledge in: Python, HTML, CSS, NodeJs</a>
                </li>
                <li>
                  {img3}
                  <a>
                    Medium knowledge of: C/C++, JavaScript, Java, SQL, GIT,
                    Bootstrap, Antd
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
