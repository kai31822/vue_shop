const express = require('express');
const sequelize = require('sequelize');
// const db = require('../models');
const router = express.Router();

/********************\
        GET
\********************/
router.get('/', (req, res) => {
    res.json({ message: 'Hello' });
});
/********************\
       POST
\********************/
router.post('/user', (req, res) => {
    // res.json({ message: 'Hello' });
    //寫入對映欄位名稱的資料內容;
    // User.create({
    //     // 記得 value 字串要加上引號
    //     firstName: 'A!',
    //     lastName: 'B@',
    //     email: 'Test@example.com',
    // })
    //     .then(() => {
    //         // 執行成功後會印出文字
    //         console.log('successfully created!!');
    //     })
    //     .catch(err => {
    //         //err
    //         if (err) {
    //             console.log(err);
    //         }
    //     });
});
router.post('/user/:id', (req, res) => {});
/********************\
        PUT
\********************/
router.put('/user/:id', (req, res) => {});
/********************\
        FELETE
\********************/
router.delete('/user/:id', (req, res) => {});

module.exports = router;
