const User = require("../models/user.model")

function message(req, msg) {
    let lang = "en"
    let acceptLanguage = req.headers["accept-language"]

    if (acceptLanguage != undefined && acceptLanguage.split("-")[0][msg] in languages)
        lang = acceptLanguage.split("-")[0]

    return languages[lang][msg]
}

function checkRegistration(req) {
    if (req.body.username       == undefined || req.body.username       == "" ||
        req.body.email          == undefined || req.body.email          == "" ||
        req.body.password       == undefined || req.body.password       == "" ||
        req.body.passwordAgain  == undefined || req.body.passwordAgain  == "")
        return languages[headerLang(req.headers["accept-language"])].sthMissing
    else if (req.body.username.length < 6)
        return languages[headerLang(req.headers["accept-language"])].usernameMinLength
    else if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(String(email).toLowerCase))
        return languages[headerLang(req.headers["accept-language"])].emailInvalid
    else if (req.body.password.length < 8)
        return languages[headerLang(req.headers["accept-language"])].passwordMinLength
    else if (!req.body.password.match(/[a-z]+/) || !req.body.password.match(/[A-Z]+/) || !req.body.password.match(/[0-9]+/))
        return languages[headerLang(req.headers["accept-language"])].passwordFormat
    else if (req.body.password != req.body.passwordAgain)
        return languages[headerLang(req.headers["accept-language"])].passwordsNotEqual

exports.reg = (req, res) => {
    // amit meg kell adni: username, email, password, passwordAgain
    const checkReg = checkRegistration(req)
    if (checkReg != null)
        res.status(400).send({
            error: message(req, checkReg)
        })
    else {
        const user = new User({
            username: req.body.username,
            email: req.body.
        })
    }
}