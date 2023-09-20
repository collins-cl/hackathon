import React from "react";
import "../Overview/Overview.scss";
import BigIdea from "../../assets/OverviewImages/bigidea.png";
import girl from "../../assets/OverviewImages/girl.png";
import star from "../../assets/OverviewImages/star.png";
import stargray from "../../assets/OverviewImages/stargray.png";
import starwhite from "../../assets/OverviewImages/star-1.png";
import arrow from "../../assets/OverviewImages/arrow.png";
import duo from "../../assets/OverviewImages/duo.png";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="overview">
      <div className="introduction">
        <div className="wrapper">
          <div className="img">
            <img src={BigIdea} alt="" />
            <img src={star} alt="" className="left" />
            <img src={arrow} className="right" alt="" />
          </div>

          <div className="details">
            <div className="head">
              Introduction to getlinked
              <span> tech Hackathon 1.0</span>
              <p>
                <img src={star} className="right" alt="" />
              </p>
            </div>
            <div className="info">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </div>
          </div>
        </div>
      </div>

      <div className="rules">
        <div className="wrapper">
          <div className="details">
            <div className="head">
              Rules and <span>Guidelines</span>
            </div>

            <div className="info">
              <img src={stargray} className="top" alt="" />
              <img src={starwhite} className="bottom" alt="" />
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </div>
          </div>

          <div className="girl">
            <img src={girl} alt="" />
          </div>
        </div>
      </div>

      <div className="criteria">
        <div className="wrapper">
          <div className="image">
            <img src={star} className="top" alt="" />
            <img src={duo} width={550} alt="" />
            <img src={starwhite} className="bottom" alt="" />
          </div>

          <div className="details">
            <div className="head">
              Judging Criteria
              <span> Key attributes</span>
            </div>

            <div className="info">
              <div>
                <span>Innovation and Creativity:</span> Evaluate the uniqueness
                and creativity of the solution. Consider whether it addresses a
                real-world problem in a novel way or introduces innovative
                features.
              </div>

              <div>
                <span>Functionality:</span> Assess how well the solution works.
                Does it perform its intended functions effectively and without
                major issues? Judges would consider the completeness and
                robustness of the solution.
              </div>

              <div>
                <span>Impact and Relevance:</span> Determine the potential
                impact of the solution in the real world. Does it address a
                significant problem, and is it relevant to the target audience?
                Judges would assess the potential social, economic, or
                environmental benefits.
              </div>

              <div>
                <span>Technical Complexity:</span> Evaluate the technical
                sophistication of the solution. Judges would consider the
                complexity of the code, the use of advanced technologies or
                algorithms, and the scalability of the solution.
              </div>

              <div>
                <span>Adherence to Hackathon Rules:</span> udges will Ensure
                that the team adhered to the rules and guidelines of the
                hackathon, including deadlines, use of specific technologies or
                APIs, and any other competition-specific requirements.
              </div>
            </div>

            <div className="read-btn">
              <Link>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
