import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull';
import Clients from '../components/sections/Clients';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import GenericSection from '../components/sections/GenericSection';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Modal from '../components/elements/Modal';

import { CopyToClipboard } from 'react-copy-to-clipboard';

class Home extends React.Component {

  state = {
    videoModalActive: false,
    pipInstallCopyHovered: false,
    pipInstallValue: 'pip3 install convect',
    pipInstallCopied: false,
    installReadyHovered: false,
    installReadyValue: 'convect ready',
    installReadyCopied: false,
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  }

  pipInstallCopy = () => {
    this.setState({ pipInstallCopied: true });
    window.setTimeout(() => { this.setState({ pipInstallCopied: false }); }, 1000)
  }

  installReadyCopy = () => {
    this.setState({ installReadyCopied: true });
    window.setTimeout(() => { this.setState({ installReadyCopied: false }); }, 1000)
  }

  render() {

    const genericSection01Header = {
      title: 'Install Convect in one line'
    }

    const genericSection02Header = {
      title: 'Watch a walkthrough of the features'
    }

    return (
      <React.Fragment>
        <HeroFull className="illustration-section-01" />
        {/* <Clients topDivider bottomDivider /> */}
        <FeaturesSplit invertMobile topDivider imageFill />
        {/* <FeaturesTiles topDivider /> */}
        <GenericSection topDivider className="center-content">
          <SectionHeader data={genericSection01Header} className="reveal-from-bottom" />
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="200">
              <span>Activate a virtual environment. Then install Convect with pip3.</span><br />
              <div style={{margin: '0 auto', display: 'inline-block' }}>
                  <CopyToClipboard text={this.state.pipInstallValue} onCopy={this.pipInstallCopy}>
                    <pre 
                      style={{
                        fontSize: 20,
                        marginBottom: 0,
                        cursor: 'pointer',
                        background: this.state.pipInstallCopyHovered ? '#2B2F40' : '#101119',
                        color: this.state.pipInstallCopyHovered ? '#DDE2F4' : '#99A1BA'
                      }}
                      onMouseEnter={() => this.setState({ pipInstallCopyHovered: true })}
                      onMouseLeave={() => this.setState({ pipInstallCopyHovered: false })}><span style={{ color: "#4A61DD"}}>(venv) $</span> {this.state.pipInstallValue}</pre>
                  </CopyToClipboard>
                  <p style={{ textAlign: 'right', fontSize: 16 }}>
                    { this.state.pipInstallCopied ? <span>Copied!</span> : <span>{ this.state.pipInstallCopyHovered ? <span>Click to copy to clipboard</span> : <span>&nbsp;</span>} </span> }
                  </p>
              </div>
              <br />
              <span>And you're ready to deploy models.</span>
              <br />
              <div style={{margin: '0 auto', display: 'inline-block' }}>
                <CopyToClipboard text={this.state.installReadyValue} onCopy={this.installReadyCopy}>
                  <pre 
                    style={{ 
                      fontSize: 20,
                      marginBottom: 0,
                      cursor: 'pointer',
                      background: this.state.installReadyHovered ? '#2B2F40' : '#101119',
                      color: this.state.installReadyHovered ? '#DDE2F4' : '#99A1BA'
                    }}
                    onMouseEnter={() => this.setState({ installReadyHovered: true })}
                    onMouseLeave={() => this.setState({ installReadyHovered: false })}><span style={{ color: "#4A61DD" }}>(venv) $</span> {this.state.installReadyValue}</pre>
                </CopyToClipboard>
                <p style={{ textAlign: 'right', fontSize: 16 }}>
                  { this.state.installReadyCopied ? <span>Copied!</span> : <span>{ this.state.installReadyHovered ? <span>Click to copy to clipboard</span> : <span>&nbsp;</span>} </span> }
                </p>
              </div>
              <p>See our <a href="https://convect.readme.io/docs">documentation</a> for next steps.</p>
            </div>
        </GenericSection>
        <GenericSection topDivider className="center-content">
          <SectionHeader data={genericSection02Header} className="reveal-from-bottom" />
          <div className="reveal-from-bottom">
            <a
              data-video="https://www.loom.com/embed/b93bd8013b194cc0a9644dd559c17345"
              href="#0"
              aria-controls="video-modal"
              onClick={this.openModal}
            >
              <Image
                src="https://cdn.loom.com/sessions/thumbnails/b93bd8013b194cc0a9644dd559c17345-with-play.gif"
                alt="Video"
                width={712}
                height={400} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={this.state.videoModalActive}
            handleClose={this.closeModal}
            video="https://www.loom.com/embed/b93bd8013b194cc0a9644dd559c17345"
            videoTag="iframe" />
          <br />
          <span>And check out the <a href="https://app.convect.ml/#/demo">demo page</a> to try out the admin dashboard without signing in.</span>
        </GenericSection> 
        <Pricing topDivider />
        <Cta split />
      </React.Fragment>
    );
  }
}

export default Home;