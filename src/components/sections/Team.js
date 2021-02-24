import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Team extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'team section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Meet the team',
      paragraph: 'Convect is founded by <a href="https://www.linkedin.com/in/sameerank/">Sameeran Kunche</a>. Sameeran was formerly a senior data scientist at Intuit, where he automated and simplified ML workflows to keep pace with tight timeline goals, shepherding new NLP models from requirements gathering to production in the span of two weeks, and to deploy at scale, i.e. over a million transaction categorization models personalized to each customer. Prior to Intuit, Sameeran worked as a software engineer at Synthego to accelerate workflows in laboratories by building better user experiences. Convect is the synthesis of these experiences and is designed to empower data scientists to deliver more value faster.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
            {/* <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/team-member-01.jpg')}
                        alt="Team member 01"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Marika Savitskiy
                    </h5>
                    <div className="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                      CEO & Co-Founder
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/team-member-02.jpg')}
                        alt="Team member 02"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Marika Savitskiy
                    </h5>
                    <div className="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                      CEO & Co-Founder
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/team-member-03.jpg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Marika Savitskiy
                    </h5>
                    <div className="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                      CEO & Co-Founder
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/team-member-04.jpg')}
                        alt="Team member 04"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Marika Savitskiy
                    </h5>
                    <div className="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                      CEO & Co-Founder
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/team-member-05.jpg')}
                        alt="Team member 05"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Marika Savitskiy
                    </h5>
                    <div className="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                      CEO & Co-Founder
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/team-member-06.jpg')}
                        alt="Team member 06"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Marika Savitskiy
                    </h5>
                    <div className="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                      CEO & Co-Founder
                    </div>
                    <p className="m-0 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>

            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;