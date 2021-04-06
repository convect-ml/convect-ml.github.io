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

class Home extends React.Component {

  state = {
    videoModalActive: false
  }
  openModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  }

  render() {

    const genericSection01Header = {
      title: 'Get started in under a minute'
    }

    const genericSection02Header = {
      title: 'Watch a demo'
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
              <p>Start a virtual environment and install Convect in one line</p>
              <Image
                className="has-shadow"
                src={require('./../assets/images/quick-install.gif')}
                alt="Hero"
                width={528}
              />
            </div>
        </GenericSection>
        <GenericSection topDivider className="center-content">
          <SectionHeader data={genericSection02Header} className="reveal-from-bottom" />
          <div className="reveal-from-bottom">
            <a
              data-video="https://www.loom.com/embed/9136ceac56fb4efd8b301f79676ad8ee"
              href="#0"
              aria-controls="video-modal"
              onClick={this.openModal}
            >
              <Image
                src="https://cdn.loom.com/sessions/thumbnails/9136ceac56fb4efd8b301f79676ad8ee-with-play.gif"
                alt="Video"
                width={712}
                height={400} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={this.state.videoModalActive}
            handleClose={this.closeModal}
            video="https://www.loom.com/embed/9136ceac56fb4efd8b301f79676ad8ee"
            videoTag="iframe" />
        </GenericSection>        
        <Pricing topDivider />
        <Cta split />
      </React.Fragment>
    );
  }
}

export default Home;