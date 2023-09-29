const express = require('express');
const sequelize = require('sequelize');
// const db = require('../models');
const router = express.Router();
/********************\
     Models
\********************/
const db = require('../models');
const User = db.User;
/********************\
        GET
\********************/
router.get('/', (req, res) => {
    res.json({ message: 'Get All users' });
});
router.get('/:id', (req, res) => {
    res.json({ message: 'Get one users' });
});
/********************\
       POST
\********************/
router.post('/user/:id', (req, res) => {
    res.json({ message: `Hello${req.params.id}` });
    // //寫入對映欄位名稱的資料內容;
    // User.create({
    //     // 記得 value 字串要加上引號
    //     firstName: 'A!',
    //     lastName: 'B@',
    //     email: 'Test@example.com',
    // }).then(() => {
    //     // 執行成功後會印出文字
    //     console.log('successfully created!!');
    // });
});
/********************\
        PUT
\********************/
router.put('/user/:id', (req, res) => {
    res.json({ message: `Update${req.params.id}` });
});
/********************\
        FELETE
\********************/
router.delete('/user/:id', (req, res) => {
    res.json({ message: `Delete${req.params.id}` });
});

module.exports = router;
