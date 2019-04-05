## Co-working mock client design
---
#### _UI and responsive design practice, homework as assigned by Epicodus, 3/8/19_

#### Slater Smith

### Description

Example website design based on fictional co-working space client. Assignment was to build a website based on fictional set of client-desires for branding. This web page was built to practice wireframing, responsive design, and implementing grids and flexboxes. Included in this README file are example screenshots of wireframe designs built in 'sketch,' as well as example user stories and personas developed to help inform webpage design.

### Responsiveness

This website is responsive for desktop, tablet, and mobile views. A custom stacked menu will appear at the top of this website below the banner image at 900 pixel viewport width and below. All other content will also rearrange to fit the viewport as it narrows.

### Setup Instructions

To view webpage with a single web browser link, visit https://slaterjamessmith.github.io/co-working-project/ in your chrome browser. To view using webpack, follow instructions below:

1. Clone this repository at https://github.com/SlaterJamesSmith/co-working-project
2. Use a terminal of your choice to access the webpage and its files by inputting: "git clone {the above clone link}"
3. If homebrew is not yet installed on your Mac, install it by running the following command in your terminal: "$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
4. If you are not using a Mac, and homebrew is not yet installed, go to the node website and follow appropriate installer for your operating system at https://nodejs.org/en/download/
5. In terminal, enter "$ nmp i" to install node package manager
6. In terminal, navigate into project by entering enter "$ cd co-working-project"
7. Next, in terminal enter "$ nmp run start" and a new web browser window should load with the url "localhost:8080"


#### Program behavior specifications:
| Behavior | Input | Output |
| --------------------------- | ------------------- | ------------------- |
| This page is meant for design and responsive design practice only, so buttons will not be clickable | User clicks button or content | nothing happens |
| Page content will remain centered when the viewport width is greater than 1025px | User changes window width from 1150px to 1050px | All images and content stay centered |
| Between viewport widths of 1025px and 900px, all content will adjust size to fit within screen | User changes window width from 1050px to 800px | All images and content adjust to smaller sizes and/or widths to fit viewport |
| Below viewport width of 739px, navigation bar menu will change styling from a row into a stacked, and each button will be a different shade of grey. In addition, bullet pointed list in the body text will disappear | User changes window width from 800px to 700px | Navigation bar menu changes to a list of stacked buttons, the topmost being a dark shade of grey with each consecutive button background becoming lighter. Bullet point list in homepage also disappears |
| Between viewport widths of 739px and 445px, footer buttons will disappear and content above "sign up" and "learn more" buttons will stack | User changes window width from 700px to 600px | "co-working with heart" text stacks on top of page description and footer buttons disappear while footer logo remains |
| Below viewport width of 445px, all content will stack in a column | User changes window width from 600px to 400px | Each block of content appears in its own line, filling the majority of the width of the page |

### Images

Mobile sketch: ![mobile sketch](/prototyping/sketches/phone-view.JPG)

Desktop sketch: ![desktop sketch](/prototyping/sketches/desktop-view.JPG)

Mobile prototype: ![mobile prototype](/prototyping/sketches/phone-sketch.JPG)

Desktop prototype: ![desktop prototype](/prototyping/sketches/desktop-sketch.JPG)

### User Personas

Description: Personas outlining potential target user needs. These personas and user stories were build to anticipate potential clients for a fictional co-working company.

#### Developer

__Needs__: Security & ability to focus<br>
__User Story__: As a software developer, I want spaces where I can focus and accountable management so I can protect my work and get things done on time.<br>
__Pain Points__: Inability to escape noise, lack of privacy, inability to report frustrations.<br>
__How Can We Serve__: Provide reporting options, transparency, digital & building security, and a variety of working spaces and rulse to accommodate people who need quiet spaces.

###### Safety focus points
* _accountability_
* _accessibility_
* _visibility_
* _inclusion_
* _reporting_
* _tolerance_
* _diversity_
* _security_

###### Productivity focus points
* _access to work resources_
* _access to quiet space_
* _work setting variety_
* _access to privacy_
* _spacious_

#### Entrepreneur

__Needs__: Culture & convenience<br>
__User Story__: As someone who is building a new brand, I want a work space that projects a marketable identity so that potential clients will want to work with me.<br>
__Pain Points__: Drab, "cubicle" workspaces; barriers to hosting clients effectively; lack of personality.<br>
__How Can We Serve__: Access to food/snacks/coffee; accessible meeting spaces with personality; mass transit access; lots of amenities.

###### Culture focus points
* _reflections of self in workspace_
* _personality in interior design_
* _signs of "local" focus_
* _DIY aesthetic_

###### Convenience focus points
* _food / sacks / coffee / tea_
* _kitchen / food storage_
* _mass transit access_
* _lots of amenities_
* _gym access_

#### Freelance Consultant

__Needs__: Community & non-tech resources<br>
__User Story__: As a non-tech freelancer, I want opportunities to connect to new and diverse people so I can feel included and work on new types of projects.<br>
__Pain Points__: Feeling isolated or like an outsider; lack of access to non-tech office tools; ability to make phone/video calls without being disruptive.<br>
__How Can We Serve__: Networking opportunities, communal meals, analog tools like printers and writing supplies, convenient meeting spaces, events.

###### Community
* _communal work spaces_
* _classes offered_
* _communal meals_
* _happy hours_
* _open spaces_
* _networking_
* _speakers_
* _meetups_

###### Non-tech
* _writing, design, ad, and editing resources_
* _ability to take and make phone calls_
* _ability to host in-person meetings_
* _networking opportunities_


### Technologies and Resources Used

* HTML
* SASS
* Webpack
* npm


### Roadmap & Known Bugs
This application still needs work before it can be considered complete. It still needs:
* Active links to additional pages
* Some font stylings don't translate on all browsers or machines, instead appearing incorrectly as Times New Roman. This is not a huge issue as this project is meant to showcase responsive design rather than font choices, but it should eventually be fixed. See prototyping screenshots above to get a better idea of correct stylings if fonts appear as Times New Roman or any non-sans-serif font in your browser. 

### License

*{This software is licensed under the MIT license}*
Copyright (c) 2019 **_{Slater Smith}_**
