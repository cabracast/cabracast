import React from "react"

import StyledList from "@components/List/styles"

import {
  ContainerImage,
  ContainerItems,
  ContainerList,
} from "@components/Container"

import Image from "@objects/Image"

import Title from "@objects/Title"
import Subtitle from "@objects/Subtitle"
import DateTime from "@objects/DateTime"
import Duration from "@objects/Duration"
import Text from "@objects/Text"
import Button from "@objects/Button"

const List = ({ data }) => {
  return (
    <StyledList>
      <ul>
        {data.map((item, index) => {
          const { title, date, slug, text } = item
          return (
            <li key={index}>
              <ContainerList>
                <ContainerImage>
                  <Image></Image>
                </ContainerImage>
                <ContainerItems>
                  <Title>{title}</Title>
                  <Subtitle>
                    Casa inteligente ou privacidade? Faça a sua escolha.
                  </Subtitle>
                  <DateTime>{date}</DateTime>
                  <Duration>42 minutos</Duration>
                  <Text>{text}</Text>
                  <Button>Youtube</Button>
                </ContainerItems>
              </ContainerList>
            </li>
          )
        })}
      </ul>
    </StyledList>
  )
}

export default List
