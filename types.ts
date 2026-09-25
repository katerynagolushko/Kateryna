import React from 'react';

export interface LinkItem {
  label: string;
  url: string;
  icon?: React.ReactNode;
  primary?: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  organization: string;
}

export interface Project {
  name: string;
  description: string;
  link: string;
  tag: string;
}