import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsActivityAreas extends Schema.Component {
  collectionName: 'components_about_us_activity_areas';
  info: {
    displayName: 'Activity_areas';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Area_type: Attribute.Enumeration<['support', 'adaptation', 'values']> &
      Attribute.Required;
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 70;
      }>;
    List: Attribute.Text &
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
    Contact_type: Attribute.Enumeration<['phone', 'address', 'email']> &
      Attribute.Required;
    Content: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 25;
      }>;
    Link: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
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
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    alt: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 35;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.activity-areas': AboutUsActivityAreas;
      'contacts.contacts-contacts': ContactsContactsContacts;
      'gallery.horizontal-gallery-item': GalleryHorizontalGalleryItem;
      'gallery.vertical-gallery-item': GalleryVerticalGalleryItem;
      'image.image': ImageImage;
    }
  }
}
