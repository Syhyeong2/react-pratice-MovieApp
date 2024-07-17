import { motion } from "framer-motion";
import styled from "styled-components";

const Card = styled(motion.div)`
  position: fixed;
  top: 100px;
  height: 60vh;
  width: 40vw;
  background-color: red;
`;

export default function Detail() {
  return <Card />;
}
