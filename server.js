require("dotenv").config()
const express = require("express")

const app = express()

const posts = [
  {
    title: "CLIs mais simples com Util.parseArgs",
    desc: "Entenda sobre como o Node.js facilitou a criação de ferramentas de linhas de comando com o novo método parseArgs!",
    thumb: "https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2022/10/Blog-cover-Template-1.png",
    link: "https://blog.lsantos.dev/parseargs/"
  },

  {
    title: "Tudo sobre o novo operador satisfies no TypeScript",
    desc: "Com a versão beta 4.9 do TypeScript, ganhamos um novo operador, o 'satisfies', bora entender como que esse novo operador pode ser útil e porque ele é super legal!",
    thumb: "https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2022/10/Blog-cover-Template.png",
    link: "https://blog.lsantos.dev/ts-satisfies/"
  },

  {
    title: "Criando bots para o Telegram com o GrammY",
    desc: "Aprenda a criar bots incríveis para o Telegram usando uma ferramenta sensacional que vai revolucionar a forma como você trabalhar com automações.",
    thumb: "https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2022/09/Blog-cover-Template-2.png",
    link: "https://blog.lsantos.dev/telegram-grammy-bot/"
  }
]

app.get("/api", (req, res) => {
  res.send(posts)
})

app.listen(process.env.PORT, () => console.log("Server Running"))