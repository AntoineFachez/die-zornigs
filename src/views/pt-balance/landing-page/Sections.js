import React from 'react';
import { data } from '../../../assets/data/pageData';
import {
  sectionStyles,
  subTitleStyles,
  textButtonStyles,
} from '../../../theme/stylesData';
import Section from '../../../components/section/Section';
import useGetUnsplash from '../../../hooks/useGetUnsplash';

const Sections = ({ props }) => {
  // const images = useGetUnsplash('yoga');
  // console.log(images);
  return data?.landingPageSections.map((section, i) => (
    <Section
      key={section.sectionName} // Add a unique key for each Section
      props={{
        ...props,
        index: i,
        sectionTitle: section.sectionName,
        list: section.list,
        textBody: section.textBody,
        variant: 'h5',
        sectionStyles: sectionStyles.sectionStyles,
        sectiontitleStyles: sectionStyles.sectiontitleStyles,
        ulStyles: sectionStyles.ulStyles,
        liStyles: sectionStyles.liStyles,
        textButtonStyles: textButtonStyles,
        textBodyStyles: sectionStyles.textBodyStyles,
      }}
    />
  ));
};
export default Sections;
