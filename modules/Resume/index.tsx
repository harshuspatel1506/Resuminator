import { Box } from "@chakra-ui/layout";
import React from "react";
import useResumeStore from "../../store/resume.store";
import { getLayout } from "./legend";

interface Props {}

const ResumePaper = (props: Props) => {
  const { header, body } = useResumeStore((state) => state.properties.layout);

  return (
    <Box display="flex" flexDir="column" aria-label="Resume Paper">
      <Box aria-label="Header">Header</Box>
      <Box
        aria-label="Body"
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        width="100%"
      >
        {body.map((rowAsColumn, index) => (
          <Box
            display="flex"
            flexDir="column"
            aria-label={`Column-${index + 1}`}
            key={index}
            flexBasis={`${(1 / body.length) * 100}%`}
          >
            {rowAsColumn.map((layoutKey) => (
              <Box
                display="flex"
                aria-label={layoutKey}
                key={layoutKey}
                width="100%"
              >
                {getLayout(layoutKey)}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ResumePaper;