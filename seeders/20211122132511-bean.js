"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "beans",
      [
        {
          name: "Brazil",
          facts: "Rich. Creamy. Sweet.",
          history:
            "The rare, fresh hit of lemon in Jaguara makes this beautiful coffee completely unique. You’ll also find a buttery, creamy body, caramel sweetness, and notes of deep chocolate. This Jaguara farm, remotely located in Campo das Vertentes . The cold weather in the region slows the maturation of the coffee which brings it more sweetness and improves its overall quality.",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peru",
          facts: " Fresh. Fruity. Complex.",
          history:
            "A layered coffee that starts with grapey acidity and sweet tropical lychee notes, then rounds things out with a milk chocolaty finish. Agua de Nieve is grown in the Andes at a high altitude (1800—2000 meters) which lends it a complex acidity. The coffee is of the Typica, Caturra variety and fully washed, resulting in a layered cup. Grown with love and attention by a group of 20 farmers, each of whom process their own yield to sweet, balanced perfection.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Costa Rica",
          facts: "Spicy. Fruity. Sweet.",
          history:
            "The unique natural anaerobic fermentation process, used to create this coffee, is intriguing and complex. It comes with tones of cinnamon, sweet pastry and red apple. It tastes like (and goes great with) apple pie!This coffee is produced on the farm of Maria Brenes, located atop a mountain ridge in Tarrazu, Costa Rica.  Esteban Villalobos, the creator has an  anaerobic fermentation process, used to create this coffee, is intriguing and complex. He mixes the whole cherries with extra mucilage, then ,ferments it for just under 20 hours in an airtight tank. This results in a clean, but very expressive cup.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uganda",
          facts: "Delicate. Juicy. Tropical.",
          history:
            "This delicate-tasting cup surprises and delights with every sip. First, this bean’s notes of hazelnut and pear will transport you to an autumnal forest that’s ablaze with both colour and flavour. Then, you skip a couple of seasons and dive straight into summer with mango, melon and stone fruit flavours. Finally, this coffee transports you to the warom coziness of winter with a strong dark chocolatey finish. All seasons in one cup of Joe, it’s like magic, ain’t it?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Colombia",
          facts: "Sweet. Fruity. Fresh.",
          history:
            "This rich-tasting coffee is filled with sweet notes and has a complex aftertaste. You’ll first notice the syrupy thickness of this lovely cup. Sweet flavours like nougat and peach will coat the inside of your mouth. Then, a light acidity from cranberry and orange will give your palate a little ‘twang’, before giving way to more round flavours, such as red apple and raisins. All in all, this is the perfect cup to enjoy when you deserve a treat.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("beans", null, {});
  },
};
