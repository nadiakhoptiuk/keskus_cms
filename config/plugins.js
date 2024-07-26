module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 100,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          asset_folder: env("CLOUDINARY_FOLDER", "keskus_ukraina"), // Вкажіть назву папки, де будуть зберігатися зображення
        },
        delete: {},
      },
    },
  },
});
