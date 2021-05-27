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

const apiUrl = "https://api.convect.ml/predict-v0/LXG4VWDdEN1-PjKMBwYn7dbn6q3eob50xJ98gzQ7RrZ/"

class FeaturesSplit extends React.Component {

  state = {
    curlCmd: `curl \\
  -H 'Content-Type: application/json' \\
  -d '[[1600, 2], [1900, 3]]' \\
  -X POST \\
  ${apiUrl}`,
    pythonCmd: `import requests
response = requests.post(
    "${apiUrl}",
    json=[[1600, 2], [1900, 3]]
)
response.json()`,
    javascriptCmd: `const fetch = require('node-fetch');
fetch('${apiUrl}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([[1600, 2], [1900, 3]]),
}).then(
  response => response.json()
).then(
  data => console.log('Success:', data)
).catch(
  error => console.error('Error:', error)
);`,
    rubyCmd: `require 'net/http'
require 'json'
require 'uri'
uri = URI.parse("${apiUrl}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
request = Net::HTTP::Post.new(uri.request_uri, 'Content-Type' => 'application/json')
request.body = [[1600, 2], [1900, 3]].to_json
response = http.request(request)
response.body`,
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
      title: 'Deploy machine learning models from your Jupyter notebook'
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
                    Call the model's API using your favorite programming language.
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
                      <Tab>Javascript</Tab>
                      <Tab>Ruby</Tab>
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
                    <TabPanel>
                    <CopyToClipboard text={this.state.javascriptCmd} onCopy={this.cmdCopy}>
                        <pre
                          style={{ 
                            marginBottom: 0,
                            cursor: 'pointer',
                            background: this.state.cmdHovered ? '#2B2F40' : '#101119',
                            color: this.state.cmdHovered ? '#DDE2F4' : '#99A1BA'
                          }}
                          onMouseEnter={() => this.setState({ cmdHovered: true })}
                          onMouseLeave={() => this.setState({ cmdHovered: false })}>
                            { this.state.javascriptCmd }
                        </pre>
                      </CopyToClipboard>
                    </TabPanel>
                    <TabPanel>
                    <CopyToClipboard text={this.state.rubyCmd} onCopy={this.cmdCopy}>
                        <pre
                          style={{ 
                            marginBottom: 0,
                            cursor: 'pointer',
                            background: this.state.cmdHovered ? '#2B2F40' : '#101119',
                            color: this.state.cmdHovered ? '#DDE2F4' : '#99A1BA'
                          }}
                          onMouseEnter={() => this.setState({ cmdHovered: true })}
                          onMouseLeave={() => this.setState({ cmdHovered: false })}>
                            { this.state.rubyCmd }
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