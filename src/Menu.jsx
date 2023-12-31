import React from "react";
import "./App.css";

const Menu = () => {
  return (
    <div class="master">
      <table class="master-table-external">
        <tr>
          <td class="master-div-name">
            <span class="master-feature">Ricardo Numa</span>
          </td>

          <td class="master-div-table">
            <table class="master-table">
              <tr>
                <td>
                  <div class="master-button">
                    <a class="button" href="#projects">
                      PROJECTS
                    </a>
                  </div>
                </td>
                <td>
                  <div class="master-button">
                    <a class="button" href="#skills">
                      SKILLS
                    </a>
                  </div>
                </td>
                <td>
                  <div class="master-button">
                    <a class="button" href="#about">
                      ABOUT ME
                    </a>
                  </div>
                </td>
                <td>
                  <div class="master-button">
                    <a class="button" href="#contact">
                      CONTACT
                    </a>
                  </div>
                </td>
              </tr>
            </table>
          </td>

          <td class="master-div"></td>
        </tr>
      </table>
    </div>
  );
};

export default Menu;
