import React from "react"

import { StyledList, StyledDecoration } from "@components/List/styles"

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
          const { title, date, text, version, subtitle, time, url } = item
          return (
            <li key={index}>
              <ContainerList>
                <ContainerImage>
                  <StyledDecoration />
                  <Image title="CabraCast" subtitle={version} />
                </ContainerImage>
                <ContainerItems>
                  <Title>{title}</Title>
                  <Subtitle>{subtitle}</Subtitle>
                  <DateTime>{date}</DateTime>
                  <Duration>{time}</Duration>
                  <Text>{text}</Text>
                  <a href={url} target="_blank">
                    <Button>Youtube</Button>
                  </a>
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
