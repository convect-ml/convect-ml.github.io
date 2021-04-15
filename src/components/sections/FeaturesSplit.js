import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  state = {
    curlCmd: "curl \\\n  -H 'Content-Type: application/json' \\\n  -d '[{\"area\":1600,\"number_of_bedrooms\":3}]' \\\n  -X POST \\\n  https://api.convect.ml/predict-v0/L3bMR89gDXpmrB1PNA-2XX526yeZ_VYdWj4q5QEJxoK/",
    pythonCmd: "import requests\nresponse = requests.post(\n  \"https://api.convect.ml/predict-v0/L3bMR89gDXpmrB1PNA-2XX526yeZ_VYdWj4q5QEJxoK/\",\n  json=[{\"area\":1600,\"number_of_bedrooms\":3}]\n)\nresponse.json()",
    cmdHovered: false,
    cmdCopied: false,
  }

  cmdCopy = () => {
    this.setState({ cmdCopied: true });
    window.setTimeout(() => { this.setState({ cmdCopied: false }); }, 1000)
  }

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Deploy models from your Jupyter notebook'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                    1. Train a model
                  </h3>
                  <p className="m-0">
                    Using tools like Python, scikit-learn, and pandas, and do all your model training in a Jupyter notebook or your favorite text editor.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/model-train.jpg')}
                    alt="Features split 01" />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                    2. Deploy the model instantly with Convect
                  </h3>
                  <p className="m-0">
                    Call a deploy function and instantly create an endpoint for your model that you can share with the world.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/model-deploy.jpg')}
                    alt="Features split 02" />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                    3. Make predictions from anywhere
                  </h3>
                  <p className="m-0">
                    In any language. From any computer with internet.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Tabs>
                    <TabList>
                      <Tab>Shell</Tab>
                      <Tab>Python</Tab>
                    </TabList>

                    <TabPanel>
                      <CopyToClipboard text={this.state.curlCmd} onCopy={this.cmdCopy}>
                        <pre
                          style={{ 
                            marginBottom: 0,
                            cursor: 'pointer',
                            background: this.state.cmdHovered ? '#2B2F40' : '#101119',
                            color: this.state.cmdHovered ? '#DDE2F4' : '#99A1BA'
                          }}
                          onMouseEnter={() => this.setState({ cmdHovered: true })}
                          onMouseLeave={() => this.setState({ cmdHovered: false })}>
                            { this.state.curlCmd }
                        </pre>
                      </CopyToClipboard>
                    </TabPanel>
                    <TabPanel>
                    <CopyToClipboard text={this.state.pythonCmd} onCopy={this.cmdCopy}>
                        <pre
                          style={{ 
                            marginBottom: 0,
                            cursor: 'pointer',
                            background: this.state.cmdHovered ? '#2B2F40' : '#101119',
                            color: this.state.cmdHovered ? '#DDE2F4' : '#99A1BA'
                          }}
                          onMouseEnter={() => this.setState({ cmdHovered: true })}
                          onMouseLeave={() => this.setState({ cmdHovered: false })}>
                            { this.state.pythonCmd }
                        </pre>
                      </CopyToClipboard>
                    </TabPanel>
                  </Tabs>
                  <p style={{ textAlign: 'right', fontSize: 16 }}>
                    { this.state.cmdCopied ? <span>Copied!</span> : <span>{ this.state.cmdHovered ? <span>Click to copy to clipboard</span> : <span>&nbsp;</span>} </span> }
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;