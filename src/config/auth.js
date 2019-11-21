const localStrategy = require("passport-local").Strategy
const pg = require("pg")
const bcrypt = require("bcryptjs")


require("../routes/student/model")
const student = pg.model("students")

module.exports = function(passport){
  passport.use(new localStrategy({usernameField: 'email'}, (email, senha, done) => {
    if(!student){
      return done(null, false, {message: "Esta conta nao existe!"})
    }

    bcrypt.compare(senha, student.senha, (erro, batem) => {
      if(batem){
        return done(null, user)
      } else{
        return done(null, false, {message: "Senha incorreta"})
      }
    })
  }))

passport.serializeUser((student, done) => {
  done(null, student.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, student) =>{
    done(err,user)
  })
})
}
