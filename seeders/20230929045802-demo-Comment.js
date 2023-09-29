'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         */
        await queryInterface.bulkInsert(
            'comments',
            [
                {
                    content:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa similique, animi asperiores illo et, harum ea reiciendis aliquid amet eos itaque, dicta natus iure tempora eum vel. Autem, numquam et?',
                    userid: 1,
                },
                {
                    content:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa similique, animi asperiores illo et, harum ea reiciendis aliquid amet eos itaque, dicta natus iure tempora eum vel. Autem, numquam et?',
                    userid: 2,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         */
        await queryInterface.bulkDelete('comments', null, {});
    },
};
