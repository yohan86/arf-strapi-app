import type { Schema, Attribute } from '@strapi/strapi';

export interface SlidersHomeSlider extends Schema.Component {
  collectionName: 'components_sliders_home_sliders';
  info: {
    displayName: 'Home Slider';
    icon: 'picture';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.Text;
    sliderimage: Attribute.Media;
  };
}

export interface VisionVision extends Schema.Component {
  collectionName: 'components_vision_visions';
  info: {
    displayName: 'vision';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Slideroptions: Attribute.Component<'sliders.home-slider', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sliders.home-slider': SlidersHomeSlider;
      'vision.vision': VisionVision;
    }
  }
}
