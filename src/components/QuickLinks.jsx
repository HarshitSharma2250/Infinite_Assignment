import { Box, Button, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { IoMdSettings, IoIosStarOutline, IoMdSwap } from "react-icons/io";

import {
  RiExchange2Fill,
  RiBarChartGroupedFill,
  RiUserFollowLine,
  RiHistoryLine,
  RiUser2Line,
} from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { CgArrowBottomLeft, CgArrowTopRight } from "react-icons/cg";
import { OverviewChart } from "./OverviewChart";
import { Master_open } from "./Master_open";

export const QuickLinks = () => {
  const menuItems = [
    { icon: CgArrowBottomLeft, label: "Deposit" },
    { icon: CgArrowTopRight, label: "Withdraw" },
    { icon: IoMdSettings, label: "Settings" },
    { icon: RiUserFollowLine, label: "Verification" },
    { icon: IoIosStarOutline, label: "Bonuses" },
    { icon: BsGraphUp, label: "MT5" },
    { icon: IoMdSwap, label: "Transfer" },
    { icon: RiHistoryLine, label: "History" },
    { icon: RiUser2Line, label: "Partner" },
    { icon: RiExchange2Fill, label: "Exchange" },
    { icon: RiBarChartGroupedFill, label: "Analytics" },
  ];

  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "auto 250px",
        xl: "auto 350px",
      }}
      p={3}
      gap={8}
    >
      <Box>
        <Box boxShadow="base" rounded="md" bg={"white"} p={3}>
          <Text fontWeight={600} color={'gray.700'}>Quick Links</Text>
          {/* menu items */}
          <Flex wrap="wrap" gap={4} p={3} bg="white">
            {menuItems.map((item, index) => (
              <Box
                key={index}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                w="90px"
                h="75px"
                p={5}
                bg={'gray.50'}
                borderRadius="md"
                boxShadow="sm"
                _hover={{ boxShadow: "md", cursor: "pointer" }}
              >
                <Icon as={item.icon} boxSize={5} color="gray.600" />
                <Text mt={1} fontSize="14px" color="gray.700" fontWeight={600}>
                  {item.label}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* chart */}
        <OverviewChart />
      </Box>

      <Master_open/>
    </Grid>
  );
};
