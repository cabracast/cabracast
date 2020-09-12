import React from "react"
import SearchEngine from "@components/SearchEngine"
import GlobalStyles from "@components/GlobalStyles"
import Header from "@components/Header"
import Content from "@components/Content"
import Footer from "@components/Footer"

import { TitleContact } from "@objects/Title"
import Button from "@objects/Button"
import Input from "@objects/Input"
import TextArea from "@objects/TextArea"

const Contact = () => {
  return (
    <>
      <GlobalStyles />
      <SearchEngine title="CabraCast" />
      <Header />
      <Content>
        <TitleContact>
          Preencha o formulário, que respondemos rapidão!
        </TitleContact>
        <Input type="text" placeholder="Diogo Cezar Teixeira Batista"></Input>
        <Input type="text" placeholder="diogo@diogocezar.com"></Input>
        <TextArea placeholder="Mensagem a ser enviada."></TextArea>
        <Button>Enviar</Button>
      </Content>
      <Footer />
    </>
  )
}

export default Contact
