import React from "react";
import "./App.css";
import Project from "./Project";

const FORM = {
  id: 6,
  name: "FORM Swim",
  description: "FORM Smart Swim Goggles app.",
  url: "https://play.google.com/store/apps/details?id=com.formathletica.formandroid&hl=en_CA&gl=US",
  image:
    "https://play-lh.googleusercontent.com/DH5JkoVV2hUvQfXdbxITSOe2NrLQBl8EJ-pY3DNG80ogJn_42lO_zmWy35O-nkq5yTE=w480-h960-rw",
};
const SFF = {
  id: 5,
  name: "Silver Fern Farms Calf Booking",
  description: "Calf pickup booking Android app.",
  url: "https://play.google.com/store/apps/details?id=com.silverfernfarms.calf.booking",
  image:
    "https://play-lh.googleusercontent.com/pmVwc7njNcZEjquCHYel-dVKPQIbCWucRogA2LW_5REJKzAyLIdchTIN49WAcn27Qs4=w480-h960-rw",
};
const SouthernCross = {
  id: 4,
  name: "My Southern Cross",
  description: "Health Insurance management Android app.",
  url: "https://play.google.com/store/apps/details?id=nz.co.southerncross.MySouthernCross",
  image:
    "https://play-lh.googleusercontent.com/yju3DgyspU-scAGOOfTTV8gk8q6b1jRNtjJXE5v4u-7MG0Wjr4N56s4WvWYedMwdTsU=s360-rw",
};
const Itau = {
  id: 3,
  name: "Banco Ita&#250;",
  description: "Bank account management Android app.",
  url: "https://play.google.com/store/apps/details?id=com.itau",
  image:
    "https://play-lh.googleusercontent.com/CyP_f9VxfdTyixcWO_-2IW5cJ1M8adkqRrY9Wo_CkH0Ixj12qdg1SJHpuye-9n_YYqM=w480-h960-rw",
};
const TRR = {
  id: 2,
  name: "TRR",
  description:
    "Android app for health plan management, feeds, request and refunds follow-up, accredited network consultation and concierge.",
  url: "https://play.google.com/store/apps/details?id=com.trrsecuritas.segurados",
  image:
    "https://play-lh.googleusercontent.com/JV_ZzEXaxnkTcy8-4q-VzowEvLdsWsw2KKxnq49c-fxXw_bKU53yD27SxP6ZX5QoGQ=w480-h960-rw",
};
const Condor = {
  id: 1,
  name: "Clube Condor",
  description:
    "Android app for purchase consultation, credits balance and receiving offers.",
  url: "https://play.google.com/store/apps/details?id=br.com.izio.condor",
  image:
    "https://play-lh.googleusercontent.com/dUNoGd0caRSTLu6aqBlWXc5pOA1wynHAqOpFNbDNnanID_ZIAngvzfxyeqzgWdpfGg=s360-rw",
};

const Arks = {
  id: 0,
  name: "Arks Capture",
  description:
    "Android app for photos upload from device's gallery or taken by the app itself, to the Arks system (corporate cloud file management platform).",
  url: null,
  image: "images/projects/arks.png",
};
const Android = [
  [FORM, SFF, SouthernCross],
  [Itau, TRR, Condor],
  [{}, Arks],
];

const ICMS = {
  id: 0,
  name: "ICMS",
  description:
    "Web and desktop system made for text file generation, that is necessary for the ICMS credit request before the Internal Revenue Service.",
  url: null,
  image: "images/projects/icms.png",
};
const Desktop = [[{}, ICMS, {}]];

const DodgeBox = {
  id: 3,
  name: "DodgeBox",
  description: "Game developed using Unity and C#.",
  url: "https://koki20.itch.io/dodgebox",
  image: "images/projects/box.png",
};
const DodgeBall = {
  id: 2,
  name: "DodgeBall",
  description: "Game developed using Unreal, Blueprint and C++.",
  url: "https://koki20.itch.io/dodgeball",
  image: "images/projects/ball.png",
};
const Pong = {
  id: 1,
  name: "Pong",
  description: "Game developed using C++.",
  url: "https://koki20.itch.io/pong",
  image: "images/projects/pong.png",
};
const EcoQuiz = {
  id: 0,
  name: "EcoQuiz",
  description:
    "Game developed at university using Java, Embedded Derby Database and Eclipse.",
  url: "https://koki20.itch.io/ecoquiz",
  image: "images/projects/quiz.png",
};
const Games = [
  [DodgeBox, DodgeBall, Pong],
  [{}, EcoQuiz],
];

const Projects = () => {
  return (
    <>
      <div id="projects"></div>
      <div className="page bg-projects">
        <h2 class="title">PROJECTS</h2>

        <hr />
        <h3 className="title">Android Apps</h3>
        <br />
        <br />
        <table className="table-projects">
          {Android.map((row) => (
            <tr>
              {row.map((project) => (
                <Project project={project} />
              ))}
            </tr>
          ))}
        </table>

        <h3 className="title">Desktop Aplications</h3>

        <table className="table-projects">
          {Desktop.map((row) => (
            <tr>
              {row.map((project) => (
                <Project project={project} />
              ))}
            </tr>
          ))}
        </table>

        <h3 className="title">Games</h3>
        <br />
        <br />

        <table className="table-projects">
          {Games.map((row) => (
            <tr>
              {row.map((project) => (
                <Project project={project} />
              ))}
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Projects;
