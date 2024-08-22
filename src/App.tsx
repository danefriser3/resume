import "./App.css";

function App() {
  return (
    <div className="body">
      <div className="resume">
        <div className="resume-header">
          <div className="resume-header-top">
            <div className="resume-header-title">
              <img
                className="prof-pic"
                alt="Daniele Parisi"
                title="Daniele Parisi"
                src="/profilo buono.jpeg"
              />
              <div className="title-box">
                <div className="title">Daniele Parisi</div>
                <div className="subtitle">Web developer</div>
              </div>
            </div>
            <div className="resume-header-details">
              <div className="detail">
                <div className="detail-title">Address</div>
                <div className="detail-subtitle">
                  Rheinstrasse 32, 41564 Kaarst
                </div>
              </div>
              <div className="detail">
                <div className="detail-title">Phone</div>
                <div className="detail-subtitle">+49 172 34 94 250</div>
              </div>
              <div className="detail">
                <div className="detail-title">Email</div>
                <div className="detail-subtitle">parisi_daniele@hotmail.it</div>
              </div>
              <div className="detail">
                <div className="detail-title">Website</div>
                <div className="detail-subtitle">danielsinformation.cloud</div>
              </div>
            </div>
          </div>
          <div className="resume-header-bottom">
            <div className="resume-header-bottom-box-1"></div>
            <div className="resume-header-bottom-box-2"></div>
          </div>
        </div>
        <div className="resume-body">
          <div className="resume-body-column-left">
            <div className="resume-body-box">
              <div className="resume-body-title">ABOUT</div>
              <div className="resume-body-content">
                I'm Daniele Parisi, 32, italian and a passionate web/software
                developer. <br />
                <br />
                Currently looking for Front End and Full Stack positions,
                interested in Engineering, Software Development and Software
                companies.
              </div>
            </div>
            <div className="resume-body-box">
              <div className="resume-body-title">DEVELOPMENT SKILLS</div>
              <div className="resume-body-content">
                <div className="content-grid">
                  <div className="content-category">
                    <div className="content-category-title">Front end</div>
                    <div className="grid-row">
                      <div>React.js</div>
                      <div>
                        <input type="range" value={95} unselectable="on" />
                      </div>
                    </div>
                    <div className="grid-row">
                      <div>Angular</div>
                      <div>
                        <input type="range" value={70} unselectable="on" />
                      </div>
                    </div>
                    <div className="grid-row">
                      <div>Typescript</div>
                      <div>
                        <input type="range" value={100} unselectable="on" />
                      </div>
                    </div>
                  </div>
                  <div className="content-category">
                    <div className="content-category-title">Back end</div>
                    <div className="grid-row">
                      <div>Node.js</div>
                      <div>
                        <input type="range" value={100} unselectable="on" />
                      </div>
                    </div>
                    <div className="grid-row">
                      <div>Java</div>
                      <div>
                        <input type="range" value={85} unselectable="on" />
                      </div>
                    </div>
                    <div className="grid-row">
                      <div>C#</div>
                      <div>
                        <input type="range" value={85} unselectable="on" />
                      </div>
                    </div>
                    <div className="grid-row">
                      <div>PHP</div>
                      <div>
                        <input type="range" value={70} unselectable="on" />
                      </div>
                    </div>
                  </div>
                  <div className="content-category">
                    <div className="content-category-title">Dev Ops</div>
                    <div className="grid-row">
                      <div>Git</div>
                      <div>
                        <input type="range" value={90} unselectable="on" />
                      </div>
                    </div>
                    <div className="grid-row">
                      <div>Docker</div>
                      <div>
                        <input type="range" value={70} unselectable="on" />
                      </div>
                    </div>
                    <div className="grid-row">
                      <div>Jenkins</div>
                      <div>
                        <input type="range" value={70} unselectable="on" />
                      </div>
                    </div>
                  </div>
                  <div className="content-category">
                    <div className="content-category-title">DBMS</div>
                    <div className="grid-row">
                      <div>MongoDB</div>
                      <div>
                        <input type="range" value={95} unselectable="on" />
                      </div>
                    </div>
                    <div className="grid-row">
                      <div>Graphql</div>
                      <div>
                        <input type="range" value={80} unselectable="on" />
                      </div>
                    </div>
                    <div className="grid-row">
                      <div>MySQL</div>
                      <div>
                        <input type="range" value={95} unselectable="on" />
                      </div>
                    </div>
                    <div className="grid-row">
                      <div>Oracle</div>
                      <div>
                        <input type="range" value={70} unselectable="on" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-body-box">
              <div className="resume-body-title">PROFESSIONAL SKILLS</div>
              <div className="resume-body-content">
                <div className="content-grid">
                  <div className="grid-row">
                    <div>Communication</div>
                    <div>
                      <input type="range" value={70} unselectable="on" />
                    </div>
                  </div>
                  <div className="grid-row">
                    <div>Leadership</div>
                    <div>
                      <input type="range" value={50} unselectable="on" />
                    </div>
                  </div>
                  <div className="grid-row">
                    <div>Management</div>
                    <div>
                      <input type="range" value={85} unselectable="on" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-body-box">
              <div className="resume-body-title">LANGUAGES</div>
              <div className="resume-body-content">
                <div className="content-grid">
                  <div className="grid-row">
                    <div>Italian</div>
                    <div>
                      <input type="range" value={100} unselectable="on" />
                    </div>
                  </div>
                  <div className="grid-row">
                    <div>English</div>
                    <div>
                      <input type="range" value={90} unselectable="on" />
                    </div>
                  </div>
                  <div className="grid-row">
                    <div>German</div>
                    <div>
                      <input type="range" value={50} unselectable="on" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-body-column-right">
            <div className="resume-body-box">
              <div className="resume-body-title">EDUCATION</div>
              <div className="resume-body-content">
                Donec at eros quam. Nulla aliquam enim nibh, eu tincidunt odio
                finibus nec. Mauris vitae mi purus. Aenean lobortis lorem ac
                enim dictum gravida quis id ligula. Duis rutrum tellus id lectus
                faucibus, sit amet elementum urna congue. Vivamus vehicula dolor
                velit, vel rutrum mauris commodo ut. Sed ultrices, nisl nec
                tincidunt mattis, dui ipsum porttitor mauris, vitae aliquam
                justo nisi ac risus. Donec faucibus dapibus sapien ac pretium.
                Maecenas cursus ultricies arcu, ac facilisis mauris interdum
                quis. Morbi dui nisi, pellentesque vitae aliquam in, rhoncus non
                augue. Integer tincidunt, libero vel pretium lobortis, erat
                mauris venenatis magna, at pretium quam odio ac purus. Donec
                ante neque, sodales maximus magna a, laoreet volutpat sem. Morbi
                et est in sapien pellentesque vestibulum.
              </div>
            </div>
            <div className="resume-body-box">
              <div className="resume-body-title">EXPERIENCES</div>
              <div className="resume-body-content">
                Donec at eros quam. Nulla aliquam enim nibh, eu tincidunt odio
                finibus nec. Mauris vitae mi purus. Aenean lobortis lorem ac
                enim dictum gravida quis id ligula. Duis rutrum tellus id lectus
                faucibus, sit amet elementum urna congue. Vivamus vehicula dolor
                velit, vel rutrum mauris commodo ut. Sed ultrices, nisl nec
                tincidunt mattis, dui ipsum porttitor mauris, vitae aliquam
                justo nisi ac risus. Donec faucibus dapibus sapien ac pretium.
                Maecenas cursus ultricies arcu, ac facilisis mauris interdum
                quis. Morbi dui nisi, pellentesque vitae aliquam in, rhoncus non
                augue. Integer tincidunt, libero vel pretium lobortis, erat
                mauris venenatis magna, at pretium quam odio ac purus. Donec
                ante neque, sodales maximus magna a, laoreet volutpat sem. Morbi
                et est in sapien pellentesque vestibulum.
              </div>
            </div>
          </div>
        </div>
        <div className="resume-footer">
          <div className="resume-footer-column-left">
            <div className="resume-footer-box">
              <div className="resume-body-title">HOBBIES & INTERESTS</div>
              <div className="resume-body-content">
                <div className="resume-footer-boxes">
                  <div>Traveling</div>
                  <div>Photography</div>
                  <div>Shopping</div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-footer-column-right">
            <div className="resume-footer-box">
              <div className="resume-body-title">REFERENCES</div>
              <div className="resume-body-content">
                <div className="resume-footer-boxes">
                  <ul>
                    <li>ciao</li>
                    <li>bello</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
