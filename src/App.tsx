import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Container, Row, Col } from 'react-bootstrap';

import Skill from './components/Skill';

import ContentHeader from './components/Content/ContentHeader';
import ContentBody from './components/Content/ContentBody';
import Loading from './components/Loading';

const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => setIsLoading(false), 1000);

  console.log(isLoading);

  const resume = {
    image: '',
    name: 'Hyrwing Souza',
    profession: '.NET Software Engineer',
    description: 'test',
    phone: '+55 41 9 96182817',
    address: 'adadsadas sdaskd jsakjd',
    website: '',
    email: 'hyrwing@hotmail.com',
    skills: [
      {
        name: 'Front end',
        value: 70
      },
      {
        name: 'Back end',
        value: 90
      },
      {
        name: 'Agile practicies',
        value: 80
      },
    ],
    experiences: [
      {
        name: 'experience 1',
        date: new Date(2020, 1, 1).toString(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra tellus in hac habitasse. Dapibus ultrices in iaculis nunc sed augue. Euismod in pellentesque massa placerat duis ultricies lacus sed. '
      },
      {
        name: 'experience 2',
        date: new Date(2020, 1, 1).toString(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra tellus in hac habitasse. Dapibus ultrices in iaculis nunc sed augue. Euismod in pellentesque massa placerat duis ultricies lacus sed. '
      }
    ],
    educations: [
      {
        name: 'education 1',
        date: new Date(2020, 1, 1).toString(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra tellus in hac habitasse. Dapibus ultrices in iaculis nunc sed augue. Euismod in pellentesque massa placerat duis ultricies lacus sed. '
      },
      {
        name: 'education 2',
        date: new Date(2020, 1, 1).toString(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra tellus in hac habitasse. Dapibus ultrices in iaculis nunc sed augue. Euismod in pellentesque massa placerat duis ultricies lacus sed. '
      }
    ],
  }

  return (
    <div className="App">
      { isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Row>
            
            

            <Col md='6' className='body'>
              <ContentHeader title='Work experience' />

              {resume.experiences.map((experience, key) => (
                <ContentBody
                  key={key}
                  title={experience.name}
                  date={experience.date}
                  description={experience.description}
                />
              ))}
              
              <ContentHeader title='Education' />

              {resume.experiences.map((experience, key) => (
                <ContentBody
                  key={key}
                  title={experience.name}
                  date={experience.date}
                  description={experience.description}
                />
              ))}
            </Col>
          </Row>
        </Container>
      )
    }
 
        

    </div>
  );
}

export default App;
