import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsActivityAreas extends Schema.Component {
  collectionName: 'components_about_us_activity_areas';
  info: {
    displayName: 'Activity_areas';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    area_type: Attribute.Enumeration<['support', 'adaptation', 'values']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 70;
      }>;
    list: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface ActivitiesIrregularActivities extends Schema.Component {
  collectionName: 'components_activities_irregular_activities';
  info: {
    displayName: 'irregular_activity';
    icon: 'picture';
    description: '';
  };
  attributes: {
    date: Attribute.Date & Attribute.Required;
  };
}

export interface ActivitiesLabel extends Schema.Component {
  collectionName: 'components_activities_labels';
  info: {
    displayName: 'Label';
    icon: 'paint';
    description: '';
  };
  attributes: {
    type_of_activity: Attribute.Enumeration<['regular', 'irregular']> &
      Attribute.Required;
    filter_button_label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    label_at_image: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface ActivitiesRegularActivity extends Schema.Component {
  collectionName: 'components_activities_regular_activities';
  info: {
    displayName: 'regular_activity';
  };
  attributes: {
    schedule: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface ContactsContactsContacts extends Schema.Component {
  collectionName: 'components_contacts_contacts_contacts_contacts';
  info: {
    displayName: 'contacts_contacts';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    contact_type: Attribute.Enumeration<['phone', 'address', 'email']> &
      Attribute.Required;
    content: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 25;
      }>;
    link: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    contact_title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 20;
      }>;
  };
}

export interface GalleryHorizontalGalleryItem extends Schema.Component {
  collectionName: 'components_gallery_horizontal_gallery_items';
  info: {
    displayName: 'HorizontalGalleryItem';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 40;
      }>;
    image: Attribute.Media & Attribute.Required;
    alternativeImageDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 40;
      }>;
  };
}

export interface GalleryVerticalGalleryItem extends Schema.Component {
  collectionName: 'components_gallery_vertical_gallery_items';
  info: {
    displayName: 'VerticalGalleryItem';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 40;
      }>;
    image: Attribute.Media & Attribute.Required;
    alternativeImageDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 40;
      }>;
  };
}

export interface ImageImage extends Schema.Component {
  collectionName: 'components_image_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    alt: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface ServicesSupportCard extends Schema.Component {
  collectionName: 'components_services_support_cards';
  info: {
    displayName: 'Support_card';
    icon: 'handHeart';
  };
  attributes: {
    icon: Attribute.Component<'image.image'> & Attribute.Required;
    title: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface TabsTabClipboard extends Schema.Component {
  collectionName: 'components_tabs_tab_clipboards';
  info: {
    displayName: 'Tab_clipboard';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    content: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.activity-areas': AboutUsActivityAreas;
      'activities.irregular-activities': ActivitiesIrregularActivities;
      'activities.label': ActivitiesLabel;
      'activities.regular-activity': ActivitiesRegularActivity;
      'contacts.contacts-contacts': ContactsContactsContacts;
      'gallery.horizontal-gallery-item': GalleryHorizontalGalleryItem;
      'gallery.vertical-gallery-item': GalleryVerticalGalleryItem;
      'image.image': ImageImage;
      'services.support-card': ServicesSupportCard;
      'tabs.tab-clipboard': TabsTabClipboard;
    }
  }
}
