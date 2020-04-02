import * as React from "react";
import TroubleshootLifecycle from "./TroubleshootLifecycle";
import { Link } from "gatsby";
import "../scss/components/Troubleshootsh.scss";

class Troubleshootsh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getExampleSpecs = (arr, n) => {
    let result = new Array(n);
    let len = arr.length;
    let  taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

  scrollToEl = (elId) => {
    const element = document.getElementById(elId);
    element.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    import("../../static/specs.json").then(module => {
      this.setState({ specJson: module });
    });
  }

  render() {
    const { isMobile } = this.props;
    const logoStyle = isMobile ? { width: `320px`, height: `31px` } : { width: `489px`, height: `47px` };
    const specs = this.state.specJson?.specs || [];

    return (
      <div className={`u-width--full u-overflow--auto flex-column flex1`}>
        <div className="section landing-header border">
          <div className="container">
            <div className="contain-700">
              <span style={logoStyle} className="troubleshoot-logo" id="tblshootLogo"></span>
              <p className="u-fontSize--24 u-marginTop--30 u-color--biscay u-lineHeight--more u-fontWeight--medium">Disconnected remote support and validation for Kubernetes applications</p>
              <div className="u-marginTop--30 u-flexMobileReflow two-btn-wrapper justifyContent--center">
                <button className="Button secondary flex alignItems--center justifyContent--center" onClick={() => this.scrollToEl("preflightSection")}>
                  <span className="icon preflight-small"></span>
                  <span>Explore preflight</span>
                </button>
                <button className="Button secondary flex alignItems--center justifyContent--center" onClick={() => this.scrollToEl("supportSection")}>
                  <span className="icon support-small"></span>
                  <span>Explore support</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="section border">
          <div className="container">
            <div className="contain-700">
              <p className="u-fontSize--largest u-color--biscay u-lineHeight--more u-fontWeight--medium">Write one spec and use it for preflight checks and support&nbsp;bundle analysis</p>
            </div>
            <div className="contain-1280 flex">
              <div className="troubleshoot-lifecycle-container u-marginTop--30 u-position--relative">
                <TroubleshootLifecycle isMobile={isMobile} />
              </div>
            </div>
          </div>
        </div>

        <div className="section gradient border" id="preflightSection">
          <div className="container">
            <div className="contain-700">
              <p className="u-fontSize--largest u-color--biscay u-lineHeight--more u-fontWeight--medium">Validate an environment before an application is installed to&nbsp;prevent common errors</p>
            </div>
            <div className="contain-1280">
              <div className="u-flexMobileReflow u-marginTop--50 u-paddingBottom--20">
                <div className="flex1 left-block next-step-arrow">
                  <div className="u-position--relative u-textAlign--center">
                    <div className="icon analyze-icon-large"><span className="illustration-text">Analyze</span></div>
                  </div>
                  <div className="u-textAlign--left">
                    <p className="u-fontSize--large u-color--dustyGray u-lineHeight--more u-marginBottom--20 u-marginTop--20 body-copy">Without installing anything to the cluster, Preflight analyzes  the environment, comparing it to your requirements.</p>
                    <a className="u-fontSize--small link">Explore analyzer specs</a>
                  </div>
                </div>
                <div className="flex1 right-block">
                  <div className="u-position--relative u-textAlign--center">
                    <div className="icon report-icon-large"><span className="illustration-text">Report</span></div>
                  </div>
                  <div className="u-textAlign--left">
                    <p className="u-fontSize--large u-color--dustyGray u-lineHeight--more u-marginBottom--20 u-marginTop--20 body-copy">A visual report is generated to highlight where the environment doesn’t meet your&nbsp;requirements.</p>
                    <a className="u-fontSize--small link">Learn more about reporting</a>
                  </div>
                </div>
              </div>
              <div className="u-marginTop--50">
                <p className="u-fontSize--largest u-color--biscay u-lineHeight--more u-fontWeight--medium">Example preflight specs</p>
                <div className="contain-1280">
                  <div className="u-flexMobileReflow u-marginTop--50">
                    {specs && specs.length > 0 ? this.getExampleSpecs(specs, 3).map((item, i) => (
                      <div className="example-spec-block-wrapper flex1" key={`${i}-${item.slug}`}>
                        <Link to={`/spec/${item.slug}`}>
                          <div className="example-spec-block">
                            <p className="u-fontSize--large u-fontWeight--medium u-color--biscay u-lineHeight--default u-marginBottom--10">{item.title}</p>
                            <p className="u-fontSize--normal u-color--dustyGray u-lineHeight--more">{item.description}</p>
                          </div>
                        </Link>
                      </div>
                    )) : null}
                  </div>
                  <div className="u-marginTop--40 u-textAlign--center">
                    <Link to="/explore/" className="Button primary u-marginRight--30">Browse specs</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section gradient" id="supportSection">
          <div className="container">
            <div className="contain-700">
              <p className="u-fontSize--largest u-color--biscay u-lineHeight--more u-fontWeight--medium">When something isn’t working right, eliminate the back and forth, async debugging by collecting everything at once</p>
            </div>
            <div className="contain-1280">
              <div className="u-flexMobileReflow u-marginTop--50">
                <div className="flex1 left-block more next-step-arrow">
                  <div className="u-position--relative u-textAlign--center">
                    <div className="icon collect-icon-large"><span className="illustration-text">Collect</span></div>
                  </div>
                  <div className="u-textAlign--left">
                    <p className="u-fontSize--large u-color--dustyGray u-lineHeight--more u-marginBottom--20 u-marginTop--20 body-copy">A short blurb about the collection process. Maybe talk about the spec and include a link to create one.</p>
                    <a className="u-fontSize--small link">Explore collector specs</a>
                  </div>
                </div>
                <div className="flex1 next-step-arrow center-block">
                  <div className="u-position--relative u-textAlign--center">
                    <div className="icon redact-icon-large"><span className="illustration-text">Redact</span></div>
                  </div>
                  <div className="u-textAlign--left">
                    <p className="u-fontSize--large u-color--dustyGray u-lineHeight--more u-marginBottom--20 u-marginTop--20 body-copy">A short blurb about redacting. Maybe talk about how it’s customizable and include a link to the docs.</p>
                    <a className="u-fontSize--small link">Learn about custom redacting</a>
                  </div>
                </div>
                <div className="flex1 right-block more">
                  <div className="u-position--relative u-textAlign--center">
                    <div className="icon analyze-icon-large"><span className="illustration-text">Analyze</span></div>
                  </div>
                  <div className="u-textAlign--left">
                    <p className="u-fontSize--large u-color--dustyGray u-lineHeight--more u-marginBottom--20 u-marginTop--20 body-copy">A short blurb about the analyze process. Maybe talk about the spec and include a link to create one.</p>
                    <a className="u-fontSize--small link">Explore analyzer specs</a>
                  </div>
                </div>
              </div>
              <div className="u-marginTop--50">
                <p className="u-fontSize--largest u-color--biscay u-lineHeight--more u-fontWeight--medium">Example support specs</p>
                <div className="contain-1280">
                  <div className="u-flexMobileReflow u-marginTop--50">
                    {specs && specs.length > 0 ? this.getExampleSpecs(specs, 3).map((item, i) => (
                      <div className="example-spec-block-wrapper flex1" key={`${i}-${item.slug}`}>
                        <Link to={`/spec/${item.slug}`}>
                          <div className="example-spec-block">
                            <p className="u-fontSize--large u-fontWeight--medium u-color--biscay u-lineHeight--default u-marginBottom--10">{item.title}</p>
                            <p className="u-fontSize--normal u-color--dustyGray u-lineHeight--more">{item.description}</p>
                          </div>
                        </Link>
                      </div>
                    )) : null}
                  </div>
                  <div className="u-marginTop--40 u-textAlign--center">
                    <Link to="/explore/" className="Button primary u-marginRight--30">Browse specs</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Troubleshootsh;
