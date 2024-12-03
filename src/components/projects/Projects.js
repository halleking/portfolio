import React from 'react';
import ExpandableComponent from './ExpandableComponent';

function Projects() {
  return (
    <div>
        <h3>Projects</h3>
        <ExpandableComponent header="Ruled Out" content="An inductive reasoning game."/>
        <ExpandableComponent header="Penguin Rally" content="A spatial orientation game."/>
        <ExpandableComponent header="What's My Name" content="A memory game."/>
        <ExpandableComponent header="FSX Pro" content="A golf fitting and coaching application."/>
        <ExpandableComponent header="Wiz Royale" content="A multiplayer battle royale game."/>
        <ExpandableComponent header="Macarena" content="A 3D animation"/>
        <ExpandableComponent header="3D Animation" content="3D photorealistic animation."/>
    </div>
  );
}

export default Projects;