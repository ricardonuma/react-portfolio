import React from "react";
import "./App.css";

const About = () => {
  function getCurrentAge() {
    if (new Date().getMonth() < 12) {
      return new Date().getFullYear() - 1988;
    } else {
      if (new Date().getDate() < 17) {
        return new Date().getFullYear() - 1988;
      } else {
        return new Date().getFullYear() - 1987;
      }
    }
  }

  function getSoftwareDeveloperYears() {
    return new Date().getFullYear() - 2013;
  }

  function getAndroidDeveloperYears() {
    return new Date().getFullYear() - 2016;
  }
  return (
    <>
      <div id="about"></div>
      <hr />

      <div className="bg-about">
        <h2 className="title">ABOUT ME</h2>

        <hr className="hr" />

        <div className="margin-left-right">
          <table>
            <tr>
              <td colspan="2">
                <p className="about-text">
                  Hi, my name is Ricardo Numa, {getCurrentAge()} years old. I
                  have been working as Software Developer for{" "}
                  {getSoftwareDeveloperYears()} years,{" "}
                  {getAndroidDeveloperYears()} of them as Android Developer. I
                  graduated in Business and after some time working I realized I
                  didn't feel realized with that.
                </p>

                <p className="about-text">
                  After a few years, I decided to look for other options and
                  after a lot of research, I ended up finding myself in the IT
                  world, more specifically programming. It's funny remembering
                  when I was a teenager, I spent many days trying to make my
                  website cooler (using HTML only) to show my friends or
                  customizing game maps to look the way I wanted them to be.
                  Back then I'd never imagined that it was possible to earn
                  money with that or even have it as a career.
                </p>
              </td>
            </tr>
            <tr>
              <td className="about-td-image">
                <img
                  className="about-image"
                  src="images/about.jpg"
                  alt="about"
                />

                <p className="about-text about-image-text">
                  Me and Melissa, my every moment partner!
                </p>
              </td>

              <td className="about-td-text">
                <p className="about-text">
                  In 2012 I started studying on my own using internet tutorials,
                  videos, articles, books and some online courses. After several
                  months, I got an opportunity to work as a freelance programmer
                  at an IT company. Because its focus was on infrastructure and
                  support, at first I only got small projects. However, after
                  some time I realized how those small experiences were piling
                  up and served as my foundation so I could evolve as a
                  professional. During that time most of my projects were were
                  web or desktop applications.
                </p>

                <p className="about-text">
                  In the next year after gather some courage, I decided to start
                  another bachelor's degree, this time in Computer Science.
                  Thanks to my work experience, many of the college subjects
                  were quite easy, while some were totally new and challenging
                  to me. Through many academic works, I learned to develop many
                  Java systems, including a quiz game and a car navigation
                  system simulator used to compare different search algorithms.
                  In 2014 I started to study Android and the next year I got an
                  opportunity to develop a DropBox-like application for Android
                  that integrated with the company's file-sharing system.
                </p>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="about-text">
                  I started working in a startup in 2016 and gained a lot of
                  experience working on different Android projects there.
                  Thankfully I graduated the next year and in 2018 I had the
                  opportunity to work in one of Latin America's biggest bank
                  apps. One year later I moved to New Zealand and was able to
                  work for the first time in an international environment. It
                  was an amazing experience, which wasn't easy but it helped me
                  a lot to further develop as a professional and as a person.
                  During the pandemic, I was lucky enough to be able to keep
                  working from home and thanks to that I watched too many movies
                  and series (never thought I would be able to watch most of my
                  favorite movie collections in less than a year xD).
                </p>

                <p className="about-text">
                  In 2021 I moved to Canada and started working in a startup
                  that has AR (Augmented-Reality) swim goggles as their product.
                  Like many startups, this company is susceptible to fund
                  shortages and unfortunately, my name was included on the
                  second layoff list of the semester. So now I'm open to new
                  opportunities and with some luck, I hope to find my new place
                  in the sun.
                </p>

                <p className="about-text">
                  Hobbies:
                  <br />I love to play sports/games, watch series/movies,
                  travel, and be with my family, friends and my girlfriend.
                  Other than that I'm always interested in learning something
                  new, like how things work or something related to my work.
                </p>
                <p className="about-text">
                  Life is too short to be wasted doing something you don't like.
                  That's why I'm thankful and happy to be able to work with
                  something I really enjoy. ; )
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default About;
