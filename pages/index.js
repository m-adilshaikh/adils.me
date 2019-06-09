import WorkItem from '../components/workitem'

import '../assets/global.scss'

import {Component, getState} from 'react'
import Head from 'next/head'

class Index extends Component {

	constructor(props) {
		super(props)
		this.state = {
			screenshot: {
				type: 'desktop'
			},
			title: 'promptdog',
			items: [
			{
				title: 'TestPrepEngine',
				theme: {backgroundColor: '#00d4b6', color: '#fff'},
				foreColor: '#efefef',
				short: 'Test Preparation with customized testing and performance insights',
				date: 'February 2019',
				previews: [
				{img_url: '/static/img/tpe.gif'}
				],
				role: 'Full-Stack Development',
				status: 'WIP',
				details: 'UI brought to life. TestPrepEngine VueJS app is powered by API Backend featuring testing with custom questions and time limits. Also delivering performance insights based on test results.',
				technologies: ['nodejs', 'vuejs', 'sass']
			},
			{
				title: 'TelePrompter',
				theme: {backgroundColor: '#2c3e50', color: '#fff'},
				short: 'Cross-Platform teleprompter with complete feature set',
				date: 'July 2018',
				previews: [
				{img_url: '/static/img/teleprompt.png'},
				{img_url: '/static/img/teleprompt.png'}
				],
				role: 'UI Design & Development',
				status: 'Proprietary',
				details: 'Built for performance on all desktop platforms using electron and quasar framework (Vue.js). The teleprompter was built ground up to support extensive features not limited to formatting but also mirroring the prompt, managing profiles as well as creating and editing the text using a powerful WYSWIG editor within the application',
				technologies: ['electron', 'quasar', 'vuejs', 'sass']
			},
			{
				title: 'Engro Systems',
				theme: {
					backgroundColor: '#222222',
					color: '#fff'	
				},
				short: 'Automating recruitment, scheduled reporting and documentation processes',
				date: 'July 2016',
				previews: [
				{img_url: '/static/img/engrosystems-1.jpg'},
				{img_url: '/static/img/engrosystems-2.jpg'},  
        {img_url: '/static/img/engrosystems-3.jpg'},
				],
				role: 'Product Development',
				status: 'Proprietary',
				details: 'EngroSystems is a tailored HR automation system for recruitment, intern management and timely generation and delivery of reports and certificates across various organizational deparments.',
				technologies: ['mysql', 'flask', 'vuejs', 'semanticui', 'sass']
			},
      {
        title: 'UX-App',
        short: 'Full featured web based UI builder',
        theme: {
          backgroundColor: '#111',
          color: '#fff'
        },
        previews: [
        {img_url: '/static/img/uxapp.png'},
        ],
        role: 'UI Design',
        status: 'Evolved',
        date: 'August 2016',
        details: 'Early concept design for a new product featuring a host of prebuilt UI components.',
        technologies: ['photoshop', 'illustrator']
      },
			{
				title: 'BlueCollar',
				theme: {
					backgroundColor: '#351F77',
					color: '#fff'
				},
				color: '#3498db',
				short: 'A platform for getting quick blue collar help at your doorstep',
				date: 'July 2017',
				previews: [
				{img_url: '/static/img/bluecollar-1.png'},
				{img_url: '/static/img/bluecollar-2.png'},
				{img_url: '/static/img/bluecollar-3.png'},
				],
				role: 'Brand Identity & Web Design',
				status: 'Retired',
				technologies: ['html5', 'css3']
			},
			{
				title: 'Medizin Medien',
				theme: {
					backgroundColor: '#DD3962',
					color: '#fff'
				},
				color: '#3498db',
				short: 'Foundation to medical industry publications',
				date: 'June 2016',
				previews: [
				{img_url: '/static/img/medizin-1.jpg'},
				{img_url: '/static/img/medizin-2.jpg'},
				],
				role: 'Wordpress Theme Development',
				status: 'Evolved',
				'details': 'Built on then modern WP roots stack, Medizin Medien custom WP theme was given support for 3 distinct custom post types and Visual Composer (WPBakery Site Builder) custom components.',
				technologies: ['wordpress'],
				demo: 'https://medizin-medien.at/',
			}
			]
		}
	}

	renderItems = () => {
		return this.state.items.map(item => <WorkItem item={item}></WorkItem>)
	}

	render() {
// <p>Artist at core <br/> Developer by profession <br/> Disguised as a Computer Scientist</p>
// <img src="/static/img/logo.svg" style={{height: 50, margin: '30px 0 0 30px'}} alt=""/>
return(
  <div>
  	<Head>
  		<title>Design and Product Development | Muhammad Adil</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <script src="https://swc.cdn.skype.com/sdk/v1/sdk.min.js"></script>
  	</Head>
    <section className="intro">

      <div className="catch">
        <p>
          <span style={{color: '#f45'}}>Artist at core.</span><br/>
          <span style={{color: '#929292'}}>Developer by profession.</span><br/>
          <span style={{color: '#bfbfbf'}}>Architect in disguise.</span>
        </p>  
      </div>

      <div className="me">
        <div className="potrait"></div>
        <div>
          <p className="title">Muhammad Adil</p>
          <a href="mailto:hello@adils.me">hello@adils.me</a>
          <div class="socials">
            <a target="_blank" href="https://github.com/m-adilshaikh"><img width="32" src="/static/img/github.svg" /></a>
            <a target="_blank" href="https://t.me/adilshaikh"><img width="32" src="/static/img/telegram.svg" /></a>
          </div>
        </div>
      </div>
    </section>
    {this.renderItems()}
    <section class="call center">
  		<h1>I am up for a chat!</h1>
  		<div class="socials">
        <a target="_blank" href="https://t.me/adilshaikh"><img height="32" src="/static/img/telegram.svg" /> <span>adilshaikh</span></a>
        <a target="_blank" href="mailto:hello@adils.me"><img height="32" src="/static/img/email.svg" /> <span>hello@adils.me</span></a>
        <div class="skype-button bubble" data-contact-id="dareknyght"></div>
      </div>
  	</section>
  </div>
	)}
}

export default Index