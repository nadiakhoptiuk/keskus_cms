
import contentTypeBuilder from '@strapi/plugin-content-type-builder/strapi-admin';
import email from '@strapi/plugin-email/strapi-admin';
import upload from '@strapi/plugin-upload/strapi-admin';
import graphql from '@strapi/plugin-graphql/strapi-admin';
import seo from '@strapi/plugin-seo/strapi-admin';
import i18N from '@strapi/plugin-i18n/strapi-admin';
import usersPermissions from '@strapi/plugin-users-permissions/strapi-admin';
import slug from 'custom-slug/strapi-admin';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'graphql': graphql,
  'seo': seo,
  'i18n': i18N,
  'users-permissions': usersPermissions,
  'slug': slug,
};

export default plugins;
