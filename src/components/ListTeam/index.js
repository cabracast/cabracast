import React from "react"

import { StyledList, StyledDecoration } from "@components/ListTeam/styles"

import {
  ContainerImage,
  ContainerItems,
  ContainerList,
} from "@components/Container"

import Image from "@objects/Image"

import Title from "@objects/Title"
import Subtitle from "@objects/Subtitle"
import Text from "@objects/Text"

const ListTeam = ({ data }) => {
  return (
    <StyledList>
      <ul>
        {data.map((item, index) => {
          const { name, subTitle, description, image, twitter } = item
          return (
            <li key={index}>
              <ContainerList>
                <ContainerImage>
                  <StyledDecoration />
                  <Image
                    title={twitter}
                    src="../assets/images/cabracast-cabra.svg"
                  />
                </ContainerImage>
                <ContainerItems>
                  <Title>{name}</Title>
                  <Subtitle>{subTitle}</Subtitle>
                  <Text>{description}</Text>
                </ContainerItems>
              </ContainerList>
            </li>
          )
        })}
      </ul>
    </StyledList>
  )
}

export default ListTeam
