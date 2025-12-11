import React from 'react';

export interface Message {
  role: 'user' | 'model' | 'system';
  content: string;
}

export enum FeatureType {
  PRIVACY = 'PRIVACY',
  AI = 'AI',
  OPEN_SOURCE = 'OPEN_SOURCE',
  CUSTOM = 'CUSTOM'
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  type: FeatureType;
}