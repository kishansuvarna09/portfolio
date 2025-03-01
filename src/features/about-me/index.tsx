import MyExperience from './components/my-experience'
import { experiences } from '../../api/experience'
import React from 'react'

const AboutMe = () => {
    return (
        <div className="space-y-12">
            {/* <h2 className="text-2xl font-semibold">Experience</h2> */}
            {experiences.map((experience) => (
                <React.Fragment key={experience.date}>
                    <MyExperience
                        title={experience.title}
                        date={experience.date}
                        company={experience.company}
                        points={experience.points}
                        current={experience.current}
                    />
                </React.Fragment>
            ))}
        </div>
    )
}

export default AboutMe
