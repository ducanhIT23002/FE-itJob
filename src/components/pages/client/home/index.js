import React from 'react';
import SerachJob from "../../../Layout/SearchJob/index"
import SkillList from '../../../Layout/SkillList';
import JobList from '../../../Layout/JobList';
import "./home.scss"


function Home() {
  return (
    <>
        <SerachJob />
        <SkillList />
        <JobList />
    </>
  );
}

export default Home;