const express = require("express");
const router = express.Router();
const User = require("./User");

// listagem de usuários
router.get("/admin/users",(req, res) => {
    res.send("Listagem de usuários.")
})

// cria usuários
router.get("/admin/users/create", (req, res) => {
    res.render("admin/users/create");
})


module.exports = router; 